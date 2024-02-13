import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

export const ping = async () => {
    try {
        const response = await fetch(`${apiUrl}/ping`, {
            method: 'GET'
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Ping failed');
        }
    } catch (error) {
        console.log("Ping error: " + error);
    }
}
