import { createClient } from "next-sanity"

const client = createClient({
  projectId: "hknjs1j6",
  dataset: "production",
  useCdn: false,
  // token: process.env.SANITY_API_WRITE_TOKEN, // Uncomment only if you add a token
})

// In-memory fallback store so it works instantly without crashing on tokens
let bustedNewsStore = []

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ bustedList: bustedNewsStore })
  }

  if (req.method === "POST") {
    try {
      const { query } = req.body
      if (!query) return res.status(400).json({ error: "Query is required" })

      // Fetch official news from Sanity Studio
      const sanityNews = await client.fetch(`*[_type == 'blog']{ title, content, category }`)

      const lowerQuery = query.toLowerCase()
      const words = lowerQuery.split(" ").filter((w) => w.length > 3)

      const matchedItem = sanityNews.find((item) => {
        const title = item.title?.toLowerCase() || ""
        const content = item.content?.toLowerCase() || ""
        return words.some((word) => title.includes(word) || content.includes(word))
      })

      const isTrue = Boolean(matchedItem)
      const verdict = isTrue ? "TRUE (VERIFIED)" : "FALSE (BUSTED)"
      const explanation = isTrue
        ? `Verified against official record [${matchedItem.category}]: "${matchedItem.title}"`
        : `No matching records found in Sanity Studio supporting this claim. Flagged as debunked.`

      const resultItem = {
        _id: Date.now().toString(),
        claim: query,
        verdict,
        isTrue,
        explanation,
        createdAt: new Date().toISOString(),
      }

      // If false, add to busted list
      if (!isTrue) {
        bustedNewsStore.unshift(resultItem)
      }

      return res.status(200).json({ result: resultItem, bustedList: bustedNewsStore })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.body
      bustedNewsStore = bustedNewsStore.filter((item) => item._id !== id)
      return res.status(200).json({ bustedList: bustedNewsStore })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}