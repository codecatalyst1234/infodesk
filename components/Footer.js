
import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
                    <div className="mr-auto flex flex-col items-center sm:flex-row">
                        <Link href="/" className="mr-auto sm:mr-6">
                            <img src="drawable/logo.png" className="w-16 h-16 rounded-full" alt="logo" />
                        </Link>
                        <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
                            ©2026 Infodesk
                        </p>
                    </div>
                    <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">

                        <Link href="https://www.youtube.com/channel/UCXrvwh7z5ntQzJx7TcYAbJA " target="_blank">
                            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-youtube"></i>
                        </Link>

                        <Link href="https://www.facebook.com/IEEEBITD/ " target="_blank">
                            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-facebook"></i>
                        </Link>

                        <Link href="https://www.instagram.com/ieeebitd/ " target="_blank">
                            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-instagram"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer