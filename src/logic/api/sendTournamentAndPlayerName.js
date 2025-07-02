import axios from "axios"

const API_URL = "http://127.0.0.1:8000/api/tournaments/create";

export default async function sendTournamentAndPlayerName(payload) {
    try {
        const response = await axios.post(API_URL, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.rounds);
        localStorage.setItem("__round__", JSON.stringify(response.data.rounds));
        return response.data.rounds;
    } catch (error) {
        console.error("Errore nella POST:", error);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
}
