import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

export const api = async (method, endpoint, body, token) => {
    console.log(method, endpoint, body, token);
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
        console.error(error);
        throw error;
    }
};
