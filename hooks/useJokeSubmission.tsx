import { useState, useEffect, useCallback } from 'react';
import { get as getJokeSubmission } from "../api/joke_submission";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage';
import { UserDataManager } from '../services/userDataManager';

export const useJokeSubmission = () => {
    const [jokeSubmission, setJokeSubmission] = useState({ 
        jokesSubmitted: 0,
        additionalSlotsPurchased: 0,
    });

    const isFocused = useIsFocused();

    const fetchJokeSubmission = useCallback(async () => {
        let isMounted = true; // This flag approach won't work as intended inside useCallback. Need to adjust.

        const storedJokeSubmission = await getData('jokeSubmission');
        if (storedJokeSubmission) {
            setJokeSubmission(storedJokeSubmission);
        }

        try {
            const jokeSubmissionResult = await getJokeSubmission(await UserDataManager.getToken());
            if (isMounted) { // This check needs to be rethought due to useCallback usage.
                setJokeSubmission(jokeSubmissionResult);
                await storeData('jokeSubmission', jokeSubmissionResult);
            }
        } catch (error) {
            console.error("Failed to fetch jokeSubmission:", error);
        }

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        fetchJokeSubmission();
    }, [fetchJokeSubmission, isFocused]);

    // Expose the fetchJokeSubmission function for manual refreshes.
    return { jokeSubmission, refresh: fetchJokeSubmission };
};
