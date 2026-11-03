import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"
import Head from "next/head"
import Script from "next/script"
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

export default function Contact({ news, events }) {
    console.log(news)
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Contact us | IEEE @ BIT Mesra Off Campus Deoghar</title>
                <meta name="description" content="IEEE at BIT Mesra Off Campus Deoghar connects students through technology, innovation, research, and impactful initiatives, building skills and a vibrant community." />
                <link rel="canonical" href="https://edu.ieee.org/in-bitd/" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Us | IEEE @ BIT Mesra Off Campus Deoghar" />
                <meta property="og:description" content="IEEE at BIT Mesra Off Campus Deoghar connects students through technology, innovation, research, and impactful initiatives, building skills and a vibrant community." />
                <meta property="og:url" content="https://edu.ieee.org/in-bitd/" />
                <meta property="og:site_name" content="IEEE @ BITD" />
                {/* <meta property="og:image" content="/assets/img/share.png" /> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | IEEE @ BIT Mesra Off Campus Deoghar" />
                <meta name="twitter:description" content="IEEE at BIT Mesra Off Campus Deoghar connects students through technology, innovation, research, and impactful initiatives, building skills and a vibrant community." />
                {/* <meta name="twitter:image" content="/assets/img/share.png" /> */}
                <meta name="twitter:creator" content="@ieeebitd" />

                <meta httpEquiv="Content-Language" content="en" />
                <link rel="icon" type="image/png" href="favicon/favicon.ico" />
                <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
                <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css" />
            </Head>

            <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js" strategy="afterInteractive" />
            <Script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" strategy="afterInteractive" defer />

            <div id="main">
                <Navbar />

                <div>
                    <div className="container mx-auto">
                        <div className="py-16 lg:py-20">
                            <div>
                                <img src="/assets/img/icon-contact.png" alt="icon envelope" />
                            </div>
                            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                                Get in Touch
                            </h1>
                            <div className="pr-2 pt-3 sm:pt-0">
                                <p className="font-body text-xl font-light text-primary dark:text-white">
                                    Got a question or proposal, or just want to say hello? Go ahead. You know what to do.
                                </p>
                            </div>
                            <form className="pt-16" action="https://formsubmit.co/btech60112.26@bitmesra.ac.in" method="POST">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="w-full sm:mr-3 sm:w-1/2">
                                        <label className="block pb-3 font-body font-medium text-primary dark:text-white">Your Name</label>
                                        <input type="text" id="name" placeholder="What should we call you?" className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white" />
                                    </div>
                                    <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                                        <label className="block pb-3 font-body font-medium text-primary dark:text-white">Email Address</label>
                                        <input type="email" id="email" placeholder="Drop that email here…" className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white" />
                                    </div>
                                </div>
                                <div className="w-full pt-6 sm:pt-10">
                                    <label className="block pb-3 font-body font-medium text-primary dark:text-white">Message</label>
                                    <textarea id="message" cols="30" rows="9" placeholder="Tell us all the things that you think we need to hear…" className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"></textarea>
                                </div>
                                <button className="mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}