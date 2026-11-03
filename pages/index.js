import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"
import { createClient } from "next-sanity"
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"
import Quote from "@/components/Quote"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function InfoDesk({ news }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)
  const [bustedNews, setBustedNews] = useState([])

  useEffect(() => {
    fetchBustedNews()
  }, [])

  const fetchBustedNews = async () => {
    try {
      const res = await fetch("/api/verify-news")
      const data = await res.json()
      if (data.bustedList) setBustedNews(data.bustedList)
    } catch (err) {
      console.error(err)
    }
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setLoading(true)
    setVerificationResult(null)

    try {
      const res = await fetch("/api/verify-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      })
      const data = await res.json()
      if (data.result) {
        setVerificationResult(data.result)
        setBustedNews(data.bustedList || [])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteBusted = async (id) => {
    try {
      const res = await fetch("/api/verify-news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      if (data.bustedList) setBustedNews(data.bustedList)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>InfoDesk | Fact Checker | IEEE @ BIT Mesra Off Campus Deoghar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" href="favicon/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
        <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
      </Head>

      <div id="main">
        <Navbar />

        <div className="container mx-auto">
          <div className="py-16 lg:py-20">
            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              InfoDesk Fact-Checker
            </h1>

            <div className="pt-3 sm:w-3/4">
              <p className="font-body text-xl font-light text-primary dark:text-white">
                Type any claim and press Enter or click Verify. Checked instantly against Sanity Studio news database!
              </p>
            </div>

            <form onSubmit={handleVerify} className="flex flex-col py-12 sm:flex-row">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Type claim here and press Enter..."
                className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary sm:w-1/2"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-5 bg-secondary px-10 py-4 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-2xl"
              >
                {loading ? "Checking..." : "Verify"}
              </button>
            </form>

            {verificationResult && (
              <div
                className={`mb-10 rounded-lg border p-6 font-body ${
                  verificationResult.isTrue
                    ? "border-green bg-green-light/20 text-primary dark:text-white"
                    : "border-red-500 bg-red-100/20 text-primary dark:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-4 py-1 text-sm font-bold text-white ${
                      verificationResult.isTrue ? "bg-green" : "bg-red-600"
                    }`}
                  >
                    {verificationResult.verdict}
                  </span>
                  <h3 className="text-xl font-semibold">Claim: "{verificationResult.claim}"</h3>
                </div>
                <p className="pt-3 text-base font-light">{verificationResult.explanation}</p>
              </div>
            )}

            <div className="pt-8 lg:pt-12">
              <h2 className="mb-6 font-body text-2xl font-bold text-primary dark:text-white md:text-3xl">
                🚫 Busted News Directory (CRUD)
              </h2>

              {bustedNews.length === 0 ? (
                <p className="font-body font-light text-grey dark:text-white">No busted claims logged yet.</p>
              ) : (
                bustedNews.map((item) => (
                  <div key={item.id} className="mt-5 flex items-start justify-between border-b border-grey-lighter pb-8">
                    <div>
                      <span className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 font-body text-sm font-semibold text-white">
                        BUSTED
                      </span>
                      <h3 className="font-body text-lg font-semibold text-primary dark:text-white">
                        "{item.claim}"
                      </h3>
                      <p className="pt-2 font-body font-light text-primary dark:text-white">
                        {item.explanation}
                      </p>
                      <p className="pt-2 font-body text-xs text-grey dark:text-white">
                        Logged on: {new Date(item.createdAt).toLocaleDateString("en-CA")}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteBusted(item.id)}
                      className="ml-4 rounded border border-red-500 px-3 py-1 text-xs font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>

            <Quote />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "hknjs1j6",
    dataset: "production",
    useCdn: false,
  })

  const query = `*[_type == 'blog']`
  const news = await client.fetch(query)

  return {
    props: { news },
  }
}