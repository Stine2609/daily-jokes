import { getApiUrl } from '../config.js';

const currentEnvironment = 'development';

const apiUrl = getApiUrl(currentEnvironment);

export const loginUser = async (email, password) => {
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

export const pingApi = async () => {
    try {
        const response = await fetch(`${apiUrl}/ping`, {
            method: 'GET'
        });

        if (response.ok) {
            if (currentEnvironment == "development") console.log("Ping OK: " + response);
            return response.json();
        } else {
            if (currentEnvironment == "development") console.log("Ping FAILED: " + response);
            throw new Error('Ping failed');
        }
    } catch (error) {

    }
}
