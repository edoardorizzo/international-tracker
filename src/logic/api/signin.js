import axios from "axios"

const API_URL = "http://127.0.0.1:8000/api/users/create-user";

async function doPost(payload) {
    try {
        const response = await axios.post(API_URL, payload);
        return response.status;

    } catch (error) {
        console.error("Errore nella POST:", error);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
}


export const signin = {
    doPost
}
