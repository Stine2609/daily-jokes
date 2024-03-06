import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();
const MAX_RETRIES = 3;
const RETRY_DELAY = 500;

export const api = async (method, endpoint, body, token) => {
    console.log(method, endpoint, body, token);

    let attempts = 0;

    const makeRequest = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': 'Bearer ' + token }),
            };

            const fetchOptions = {
                method: method,
                headers: headers,
                ...(body && { body: JSON.stringify(body) }),
            };

            const response = await fetch(`${apiUrl}${endpoint}`, fetchOptions);

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed: ' + response.status);
            }
        } catch (error) {
            if (attempts < MAX_RETRIES) {
                const backoff = RETRY_DELAY * Math.pow(2, attempts) + Math.random() * RETRY_DELAY;
                console.error(`Attempt ${attempts + 1}: ${error.message}. Retrying in ${backoff}ms...`);
                attempts++;
                await new Promise(resolve => setTimeout(resolve, backoff));
                return makeRequest();
            } else {
                console.error(error);
                throw error; 
            }
        }
    };

    return makeRequest();
};
