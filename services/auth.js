import { getApiUrl } from '../config.js';

const currentEnvironment = 'development';

const apiUrl = getApiUrl(currentEnvironment);

export const login = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "email": email, 
                "password": password,
            }),
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const register = async (email, password, name) => {
    try {
        const response = await fetch(`${apiUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "name": name,
                "email": email, 
                "password": password,
            }),
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};