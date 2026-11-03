import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home({ news, events }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>About Us | IEEE @ BIT Mesra Off Campus Deoghar</title>
        <meta
          name="description"
          content="IEEE Student Branch at BIT Mesra Off-Campus Deoghar — empowering student innovators, researchers, and tech enthusiasts."
        />
        <link rel="canonical" href="https://edu.ieee.org/in-bitd/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | IEEE @ BIT Mesra Off Campus Deoghar" />
        <meta
          property="og:description"
          content="Empowering student innovators, researchers, and tech enthusiasts through workshops, hackathons, and real-world projects."
        />
        <meta property="og:url" content="https://edu.ieee.org/in-bitd/" />
        <meta property="og:site_name" content="IEEE @ BITD" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | IEEE @ BIT Mesra Off Campus Deoghar" />
        <meta
          name="twitter:description"
          content="Empowering student innovators, researchers, and tech enthusiasts through workshops, hackathons, and real-world projects."
        />
        <meta name="twitter:creator" content="@ieeebitd" />

        <meta httpEquiv="Content-Language" content="en" />
        <link rel="icon" type="image/png" href="favicon/favicon.ico" />
        <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
        <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css"
        />
      </Head>

      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" strategy="afterInteractive" defer />

      <div id="main">
        <Navbar />

        <div>
          <div className="container mx-auto">
            <div className="py-16 lg:py-20">
              <div>
                <img src="/assets/img/icon-uses.png" alt="icon about" />
              </div>

              <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                About IEEE @ BITD
              </h1>

              <div className="pr-2 pt-4">
                <p className="font-body text-xl font-light leading-relaxed text-primary dark:text-white">
                  The <span className="font-medium text-green dark:text-green-light">IEEE Student Branch</span> at Birla
                  Institute of Technology, Mesra (Off-Campus Deoghar) is an active technical community dedicated to advancing
                  technology, driving open innovation, and empowering students to build real-world software, hardware, and engineering solutions.
                </p>
              </div>

              {/* Core Pillars Section */}
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white md:text-3xl">
                  Our Core Pillars
                </h3>

                <ul className="list-disc space-y-5 pl-8">
                  <li className="font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-semibold text-secondary dark:text-green-light">Practical Technical Learning: </span>
                    Moving beyond theory through hands-on hackathons, technical workshops, live product development, and open-source sessions.
                  </li>
                  <li className="font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-semibold text-secondary dark:text-green-light">Cross-Domain Innovation: </span>
                    Bridging electronics, software systems, AI/ML, web technologies, and robotics into unified student projects.
                  </li>
                  <li className="font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-semibold text-secondary dark:text-green-light">Student Mentorship & Growth: </span>
                    Creating structured peer-mentorship networks, academic support, competitive programming groups, and career guidance.
                  </li>
                  <li className="font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-semibold text-secondary dark:text-green-light">Research & Publication: </span>
                    Guiding students to author IEEE research papers, explore emerging engineering trends, and present at technical symposiums.
                  </li>
                </ul>
              </div>

              {/* What We Do Section */}
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-6 font-body text-2xl font-semibold text-primary dark:text-white md:text-3xl">
                  What We Drive
                </h3>

                <div className="space-y-4">
                  <p className="font-body text-xl font-light leading-relaxed text-primary dark:text-white">
                    We organize flagship tech symposiums, code sprints, embedded systems bootcamps, and real-time technical fact-checking portals like <span className="font-medium text-green dark:text-green-light">InfoDesk</span> to ensure our campus community stays informed and ahead in tech.
                  </p>

                  <p className="font-body text-xl font-light leading-relaxed text-primary dark:text-white">
                    Whether your domain is <span className="font-medium text-green dark:text-green-light">Full-Stack Web Development, Embedded Systems, Machine Learning, Cyber Security, or Mobile Apps</span>, IEEE @ BITD provides the sandbox to build, ship, and scale your ideas.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none py-8 sm:py-12">
                  <blockquote className="border-l-4 border-secondary pl-4 italic text-primary dark:text-white">
                    <p className="text-xl font-medium">"Advancing Technology for Humanity — Starting Right Here on Campus."</p>
                  </blockquote>
                  <p className="pt-4 font-body text-xl font-light text-primary dark:text-white">
                    Join us in building the next generation of engineers, creators, and technology leaders at BIT Mesra Deoghar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}