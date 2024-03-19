import { getApiUrl } from '../config.js';
import { getData, storeData, removeData } from '../utils/storage.js';

const apiUrl = getApiUrl();
const MAX_RETRIES = 3;
const RETRY_DELAY = 500;

export const api = async (method, endpoint, body, token, useCache = true, cacheDuration = 3, retry = true) => {
    console.log(method, endpoint, body, token);

    const serializedBody = body ? JSON.stringify(body) : '';
    const cacheKey = `${method}:${endpoint}:${serializedBody}`;

    if (useCache) {
        const cachedData = await getData(cacheKey);
        if (cachedData) {
            const now = Date.now();
            if (now - cachedData.timestamp < cacheDuration * 1000) {
                return cachedData.response;
            } else {
                await removeData(cacheKey);
            }
        }
    }

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
                const jsonResponse = await response.json();
                if (useCache) {
                    await storeData(cacheKey, { response: jsonResponse, timestamp: Date.now() });
                }
                return jsonResponse;
            } else {
                const jsonResponse = await response.json();
                throw jsonResponse;
            }
        } catch (error) {
            if (attempts < MAX_RETRIES && retry) {
                const backoff = RETRY_DELAY * Math.pow(2, attempts) + Math.random() * RETRY_DELAY;
                console.log(`Attempt ${attempts + 1}: ${error.message}. Retrying in ${backoff}ms...`);
                attempts++;
                await new Promise(resolve => setTimeout(resolve, backoff));
                return makeRequest();
            } else {
                console.log(error);
                throw error; 
            }
        }
    };

    return makeRequest();
};
