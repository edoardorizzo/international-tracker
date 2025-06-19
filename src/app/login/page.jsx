'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import LoginSigninHeader from "@/components/LoginSigninHeader"

import { login } from '@/logic/api/login'
import { handleStorage } from '@/logic/handleStorage'

export default function Login() {
    const [username, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()

        const payload = { username, password }

        const status = await login.doPost(payload)
        console.log(status);


        if (status === 201 || status === 200) {
            handleStorage.set("__username__", payload.username)
            router.push("/tournaments")
        } else if (status === 401) {
            setError("Username o password non validi")
        }

    }

    return (
        <main className="p-4">
            <LoginSigninHeader></LoginSigninHeader>
            <form
                onSubmit={handleLogin}
                className="bg-white m-auto p-8 rounded-lg shadow-md w-full max-w-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-[#537A5A]">Accedi</h2>
                <div>
                    <label className="block mb-1 font-semibold">Username</label>
                    <input
                        type="username"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={username}
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
                <p className='text-xs text-red-600 my-3 text-center'>{error}</p>
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
