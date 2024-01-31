import { getApiUrl } from '../config.js';

const currentEnvironment = 'development';

const apiUrl = getApiUrl(currentEnvironment);

export const pingApi = async () => {
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
