import { getApiUrl } from '../config.js';

const apiUrl = getApiUrl();

/**
 * TODO: add filter options to get
 */
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
            throw new Error('Failed to retrieve jokes');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const create = async (token, jokeData) => {
    try {
        const response = await fetch(`${apiUrl}/joke`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(jokeData),
        });

        if (response.ok) {
            return response;
        } else {
            throw new Error('Failed to create joke');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getById = async (token, id) => {
    try {
        const response = await fetch(`${apiUrl}/joke/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Failed to retrieve joke with ID: ${id}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const update = async (token, id, jokeData) => {
    try {
        const response = await fetch(`${apiUrl}/joke/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(jokeData),
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Failed to update joke with ID: ${id}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteJoke = async (token, id) => {
    try {
        const response = await fetch(`${apiUrl}/joke/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });

        if (response.ok) {
            return "Joke deleted successfully";
        } else {
            throw new Error(`Failed to delete joke with ID: ${id}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
