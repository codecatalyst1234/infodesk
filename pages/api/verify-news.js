import { createClient } from "next-sanity"

const sanityClient = createClient({
  projectId: "hknjs1j6",
  dataset: "production",
  useCdn: false,
})

// Local storage for busted items
let bustedNewsStore = []

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { query } = req.body
      if (!query) return res.status(400).json({ error: "Query required" })

      // Fetch news from Sanity Studio
      const sanityNews = await sanityClient.fetch(`*[_type == 'blog']{ title, content, category }`)

      const lowerQuery = query.toLowerCase()
      
      // Match query against Sanity news items (checks title or content overlap)
      const matchedItem = sanityNews.find(item => {
        const title = item.title?.toLowerCase() || ""
        const content = item.content?.toLowerCase() || ""
        // Split query into significant words
        const words = lowerQuery.split(" ").filter(w => w.length > 3)
        return words.some(word => title.includes(word) || content.includes(word))
      })

      let isTrue = false
      let verdict = "FALSE (BUSTED)"
      let explanation = ""

      if (matchedItem) {
        isTrue = true
        verdict = "TRUE (VERIFIED)"
        explanation = `Matches official record under category [${matchedItem.category}]: "${matchedItem.title}"`
      } else {
        explanation = `No official records or matching news found in database supporting this claim. Flagged as unverified/busted.`
      }

      const resultItem = {
        id: Date.now().toString(),
        claim: query,
        verdict,
        isTrue,
        explanation,
        createdAt: new Date().toISOString(),
      }

      // If busted, add to list automatically
      if (!isTrue) {
        bustedNewsStore.unshift(resultItem)
      }

      return res.status(200).json({ result: resultItem, bustedList: bustedNewsStore })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

  if (req.method === "GET") {
    return res.status(200).json({ bustedList: bustedNewsStore })
  }

  if (req.method === "DELETE") {
    const { id } = req.body
    bustedNewsStore = bustedNewsStore.filter(item => item.id !== id)
    return res.status(200).json({ bustedList: bustedNewsStore })
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}