"use client"

import React, { useState } from "react";
import InfoMessage from "@/components/InfoMessage";
import Input from "@/components/Input";
import InputPlayerDelete from "@/components/InputPlayerDelete";
import TopApp from "@/components/TopApp";
import { useRouter } from "next/navigation";
import { handleStorage } from "@/logic/handleStorage";

export default function TournamentNamePage() {

    let router = useRouter();

    const [name, setTournamentName] = useState("");
    const [players, setPlayer] = useState([
        { name: "" },
        { name: "" }
    ])
    const [clickCount, setClickCount] = useState(1);
    const addPlayer = () => {
        if (clickCount <= 18) {
            const newPlayer = {
                name: ""
            };

            setPlayer([...players, newPlayer]);
            setClickCount(prev => prev + 1);
        }
    };
    const [tournamentNameErrorMessage, setTournamentNameErrorMessage] = useState("");
    const [playerNameErrorMessage, setPlayerNameErrorMessage] = useState("");

    const handleSubmit = () => {
        const payload = {
            name,
            players
        };

        if (!name) {
            setTournamentNameErrorMessage("❌ Inserisci il nome del torneo")
            return;
        } else {
            setTournamentNameErrorMessage("");
        }

        const invalidPlayer = players.filter(elm => elm.name.trim() === "")
        if (invalidPlayer.length > 0) {
            setPlayerNameErrorMessage("❌ Inserisci il nome di tutti i giocatori");
            return;
        } else {
            setPlayerNameErrorMessage("");
        }

        handleStorage.set("__tournamentData__", payload);

        router.push("/start-tournament");
    }

    return (
        <div className="container h-full">
            <TopApp to="/tournaments" message="Create Tournament"></TopApp>

            <div className="center_content_container my-7">
                <h2 className=" text-white">Insert tournament name</h2>
                <Input
                    value={name}
                    onChange={(e) => setTournamentName(e.target.value)}
                />
                {tournamentNameErrorMessage ?
                    <span className="text-red-500 text-xs my-2">{tournamentNameErrorMessage}</span> : null
                }
                <InfoMessage caption="Ricordati di utilizzare nomi diversi così da non confonderti tra un torneo e l’altro. Questo campo è obbligatorio" />
            </div>

            <div className="bottom_content_container my-7">
                <h2 className=" text-white">Insert players name</h2>
                <ul>
                    {players.map((playerObj, index) => (
                        <li key={index}>
                            <InputPlayerDelete
                                input={"/user-solid.svg"}
                                playerName={playerObj.name}
                                onChange={(e) => {
                                    const updatedPlayers = [...players];
                                    updatedPlayers[index].name = e.target.value;
                                    setPlayer(updatedPlayers);
                                }}
                                onRemove={() => {
                                    setPlayer(players.filter(p => p.name !== playerObj.name));
                                    setClickCount(prev => prev - 1);
                                }}
                                index={index}
                            />
                        </li>
                    ))}
                </ul>
                {playerNameErrorMessage ?
                    <span className="text-red-500 my-2 text-xs">{playerNameErrorMessage}</span> : null
                }
                <InfoMessage caption="Inserisci il nome dei giocatori presenti al torneo. Il numero minimo è di due." />
            </div>

            <div className="bottom_element_container my-7 flex flex-col gap-3">
                <button className="secondary_button" onClick={addPlayer}>Add players</button>
                <button className="primary_button" onClick={handleSubmit}>Create tournament</button>
            </div>
        </div>
    );
}
