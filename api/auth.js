import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

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

export const loginWithToken = async (token) => {
    try {
        const response = await fetch(`${apiUrl}/auth/loginWithToken`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login with token failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const register = async (email, password, name, deviceID) => {
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
                "deviceID": deviceID
            }),
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Register failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const logout = async (token) => {
    try {
        const response = await fetch(`${apiUrl}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Logout failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const changePassword = async (token, newPassord) => {
    try {
        const response = await fetch(`${apiUrl}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: {
                "password": newPassord,
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Logout failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const update = async (token, data) => {
    try {
        const response = await fetch(`${apiUrl}/auth/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return response;
        } else {
            throw new Error('Update user info failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};