import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

export const getContest = async (date) => {
    try {
        const response = await fetch(`${apiUrl}/contest`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Fetch contest failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};