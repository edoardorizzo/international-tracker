import React from 'react'
import Link from 'next/link';

export default function TopApp({ to, message }) {
    return (
        <div className="top_app flex items-center justify-start text-white gap-4">
            <Link href={to}>
                <div className="arrow_container">
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5469 9.40625L15.4531 21.5L27.5469 33.5938" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <h2>{message}</h2>
        </div>
    )
}
