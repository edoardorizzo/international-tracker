import axios from "axios"

const API_URL = "http://192.168.1.4:8000/api/tournaments/create";

export default async function sendTournamentAndPlayerName(payload) {
    try {
        await axios.post(API_URL, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Errore nella POST:", error);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
}
