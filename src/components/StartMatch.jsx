"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

function StartMatchComp() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/create-tournament');
    }

    return (
        <div className='background_start_match'>
            <h2 className='mb-3 text-white'>Traccia il tuo torneo con International!</h2>
            <button className='primary_button' onClick={handleNavigate}>Inizia Torneo</button>
        </div>
    )
}

export default StartMatchComp
