'use client'

import { useState } from 'react'
import LoginSigninHeader from "@/components/LoginSigninHeader"
import Link from 'next/link'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Le password non coincidono')
            return
        }
        console.log('Registrazione con:', email, password)
    }

    return (
        <main className="p-4">
            <LoginSigninHeader></LoginSigninHeader>
            <form
                onSubmit={handleRegister}
                className="bg-white m-auto p-8 rounded-lg shadow-md w-full max-w-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-[#537A5A]">Registrati</h2>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Conferma Password</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="primary_button w-full">
                    Registrati
                </button>
                <p className="text-center text-sm mt-4">
                    <Link href="/login" className="text-[#537A5A] underline">
                        Hai già un account? Accedi
                    </Link>
                </p>
            </form>
        </main>
    )
}
