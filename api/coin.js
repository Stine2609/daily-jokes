import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

export const get = async (token) => {
    try {
        const response = await fetch(`${apiUrl}/joke`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to retrieve coins');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};