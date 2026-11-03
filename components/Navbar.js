import React from 'react'
import { useState } from 'react'
import Link from "next/link"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6 lg:py-10">
                    <Link href="/" className="flex items-center">
                        <span href="/" className="mr-2">
                            <img src="drawable/logo.png" className="h-16 w-16 rounded-full" alt="logo" />
                        </span>
                        <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
                            Infodesk
                        </p>
                    </Link>
                    {/* <div className="flex items-center lg:hidden">
                        <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"></i>

                        <svg width="24" height="15" xmlns="http://www.w3.org/2000/svg" className="fill-current text-primary dark:text-white">
                            <g fillRule="evenodd">
                                <rect width="24" height="3" rx="1.5" />
                                <rect x="8" y="6" width="16" height="3" rx="1.5" />
                                <rect x="4" y="12" width="20" height="3" rx="1.5" />
                            </g>
                        </svg>
                    </div> */}
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="text-primary dark:text-white" aria-label="Open navigation menu" aria-expanded={isMenuOpen}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M3 6h18" />
                                <path d="M3 12h18" />
                                <path d="M3 18h18" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center">

                            <li className="group relative mr-6 mb-1">
                                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                                <Link href="/" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Home</Link>
                            </li>

                            <li className="group relative mr-6 mb-1">
                                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                                <Link href="/about" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">About</Link>
                            </li>

                            <li className="group relative mr-6 mb-1">
                                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                                <Link href="/contact" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Contact</Link>
                            </li>

                            <li>
                                <i className="bx cursor-pointer text-3xl text-primary dark:text-white"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden">
                <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
                    <i className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"></i>
                    <ul className="mt-8 flex flex-col">

                        <li className="">
                            <Link href="/" className="mb-3 block px-2 font-body text-lg font-medium text-white">Intro</Link>
                        </li>

                        <li className="">
                            <Link href="/blog" className="mb-3 block px-2 font-body text-lg font-medium text-white">Blog</Link>
                        </li>

                        <li className="">
                            <Link href="/uses" className="mb-3 block px-2 font-body text-lg font-medium text-white">Uses</Link>
                        </li>

                        <li className="">
                            <Link href="/contact" className="mb-3 block px-2 font-body text-lg font-medium text-white">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div> */}

            <div className={`fixed inset-0 z-50 flex bg-black/80 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
                <div className={`relative ml-auto h-full w-2/3 bg-green p-4 transition-transform duration-300 md:w-1/3 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute right-4 top-4 text-4xl text-white" aria-label="Close navigation menu">&times;</button>

                    <ul className="mt-12 flex flex-col">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                        ].map((item) => (
                            <li key={item.path}>
                                <Link href={item.path} onClick={() => setIsMenuOpen(false)} className="mb-3 block rounded px-2 py-2 font-body text-lg font-medium text-white hover:bg-white/10">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar