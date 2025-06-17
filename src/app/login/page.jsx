'use client'

import { useState } from 'react'
import LoginSigninHeader from "@/components/LoginSigninHeader"
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login con:', email, password)
    }

    return (
        <main className="p-4">
            <LoginSigninHeader></LoginSigninHeader>
            <form
                onSubmit={handleLogin}
                className="bg-white m-auto p-8 rounded-lg shadow-md w-full max-w-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-[#537A5A]">Accedi</h2>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit" className="primary_button w-full">
                    Accedi
                </button>
                <p className="text-center text-sm mt-4">
                    <Link href="/signin" className="text-[#537A5A] underline">
                        Non hai un account? Registrati
                    </Link>
                </p>
            </form>
        </main>
    )
}
