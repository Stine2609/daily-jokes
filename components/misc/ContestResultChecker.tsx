import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { getData, storeData } from '../../utils/storage';
import Results from './Results';
import { api } from '../../api/api';
import { UserDataManager } from '../../services/userDataManager';
import { formatTimestampToShortDate } from '../../utils/date';

type ContestResult = {
    id: number;
    date: string;
    rank: number;
    topic: string;
    coins: number;
    contest: {
        topic: string;
        date: string;
    };
};

const LAST_POLL_TIME_KEY = 'LAST_POLL_TIME';
const POLL_INTERVAL_MS = 1000; // Adjust the polling interval as needed

const fetchContestResult = async (): Promise<ContestResult[] | undefined> => {
    try {
        const result = await api("GET", "/contestresult/unread", undefined, await UserDataManager.getToken());
        return result as ContestResult[];
    } catch (error) {
        console.error("Failed to fetch contestResult:", error);
    }
};

interface ContestResultCheckerProps {
    children: ReactNode;
}

export default function ContestResultChecker({ children }: ContestResultCheckerProps) {
    const [contestResult, setContestResult] = useState<ContestResult | null>(null);

    const checkForNewContestResults = useCallback(async () => {
        const lastPollTime: number = await getData(LAST_POLL_TIME_KEY) || 0;
        const now = Date.now();

        if (now - lastPollTime >= POLL_INTERVAL_MS) {
            const result = await fetchContestResult();
            if (result && result.length > 0) {
                setContestResult(result[0]);
                await api("GET", `/contestresult/read/${result[0].id}`, undefined, await UserDataManager.getToken());
            }

            await storeData(LAST_POLL_TIME_KEY, now);
        }

        const nextPollIn = POLL_INTERVAL_MS - (Date.now() - lastPollTime);
        setTimeout(checkForNewContestResults, nextPollIn > 0 ? nextPollIn : POLL_INTERVAL_MS);
    }, []);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
            if (nextAppState === 'active') {
                checkForNewContestResults();
            }
        });

        return () => {
            // Use the subscription object to remove the event listener
            subscription.remove();
        };
    }, [checkForNewContestResults]);

    return (
        <>
            {children}
            {contestResult && (
                <Results
                    visible={true}
                    onRequestClose={() => setContestResult(null)}
                    results={{
                        date: formatTimestampToShortDate(contestResult.contest.date),
                        rank: "#" + contestResult.rank.toString(),
                        theme: contestResult.contest.topic,
                        reward: contestResult.coins,
                    }}
                />
            )}
        </>
    );
};