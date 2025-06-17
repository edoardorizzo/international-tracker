'use client'

import Link from "next/link"

export default function Header({ menuOpen, setMenuOpen }) {

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="flex justify-between items-center gap-4 p-4 md:p-8">
            <button onClick={handleMenu}>
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="white">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            <div className="logo-container h-14">
                <img className="h-full" src="/Logo.svg" alt="International Tracker Logo" />
            </div>
            <div className="sigin flex justify-between items-center gap-4">
                <Link href="/login" target="_blank" className="primary_button">Accedi</Link>
                <Link href="/signin" target="_blank" className="secondary_button hidden md:block">Registrati</Link>
            </div>
        </header>
    )
}
