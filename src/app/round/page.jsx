"use client";

import { useEffect, useState } from "react";

export default function RoundPage() {
    const [secondsLeft, setSecondsLeft] = useState(20 * 60);
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        const data = localStorage.getItem("__round__");
        if (data) {
            setRounds(JSON.parse(data));
        }
    })

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="text-center text-2xl font-bold text-white">
            {formatTime(secondsLeft)}

            <div className="mt-10">
                {rounds.map((round, index) => (
                    <div key={index} className="mb-4 p-4 border rounded shadow">
                        <h2 className="text-lg font-bold">Round {round.number}</h2>
                        {round.pairings.map((pairing, i) => (
                            <div key={i} className="ml-4">
                                <p>Match {i + 1}:</p>
                                <ul className="ml-4 list-disc">
                                    {pairing.entries.map((entry, j) => (
                                        <li key={j}>
                                            {entry.player.name} (ID: {entry.player.id}) – Wins: {entry.wins}, Draws: {entry.draws}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
