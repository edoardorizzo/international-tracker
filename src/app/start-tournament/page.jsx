"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { handleStorage } from '@/logic/handleStorage'
import sendTournamentAndPlayerName from '@/logic/api/sendTournamentAndPlayerName'
import TopApp from '@/components/TopApp'

export default function StartTournaments() {
    const router = useRouter();

    const [tournamentData] = useState(() => handleStorage.get("__tournamentData__"));

    const handleSubmit = () => {
        sendTournamentAndPlayerName(tournamentData)
        router.push("/round");
    }

    return (
        <div className="container vh-full">

            <TopApp to="/create-tournament" message="Riepilogo Torneo" />

            <div className="center_content_container my-7">
                <div className='torunament_blocks my-5'>
                    <h2 className=" text-green-600">Nome Torneo</h2>
                    <h3 className='text-white'>{tournamentData.name}</h3>
                </div>

                <div className='torunament_blocks my-5'>
                    <h2 className=" text-green-600">Giocatori</h2>
                    <ol>
                        {
                            tournamentData.players.map((p, index) => {
                                return (
                                    <li className='text-white' key={index}>{p.name}</li>
                                )
                            })
                        }
                    </ol>
                </div>

                <div>
                    <button className='primary_button' onClick={handleSubmit}>Conferma Torneo</button>
                </div>
            </div>
        </div>
    )
}
