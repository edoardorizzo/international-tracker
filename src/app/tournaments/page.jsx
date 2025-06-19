"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import HeaderLogo from '@/components/HeaderLogo';
import StartMatchComp from '@/components/StartMatch';

import { handleStorage } from '@/logic/handleStorage';

function Tournaments() {
    const router = useRouter();

    const username = handleStorage.get("__username__")

    const handleNavigate = () => {
        router('/tournament');
    }

    return (
        <div className='container'>
            <h2 className='text-white mb-5'>👋🏻 Ciao {username}!</h2>
            <StartMatchComp onClick={handleNavigate}></StartMatchComp>
        </div >
    )
}

export default Tournaments
