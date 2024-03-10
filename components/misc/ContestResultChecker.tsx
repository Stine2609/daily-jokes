
import React, { useState, useEffect } from 'react';
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

const fetchContestResult = async (): Promise<ContestResult[] | undefined> => {
    try {
        const result = await api("GET", "/contestresult/unread", undefined, await UserDataManager.getToken());
        return result as ContestResult[];
    } catch (error) {
        console.error("Failed to fetch contestResult:", error);
    }
};

const ContestResultChecker: React.FC = ({ children }) => {
    const [contestResult, setContestResult] = useState<ContestResult | null>(null);

    useEffect(() => {
        let isMounted = true; // Flag to check mount status

        const checkForNewContestResults = async () => {
            if (!isMounted) return; // Prevent running if component has been unmounted

            try {
                const result = await fetchContestResult();
                if (result && result.length > 0) {
                    setContestResult(result[0]);
                    await api("GET", `/contestresult/read/${result[0].id}`, undefined, await UserDataManager.getToken());
                }
            } catch (error) {
                console.error("Failed to poll for contestResult:", error);
            } finally {
                if (isMounted) {
                    setTimeout(checkForNewContestResults, 1000); // Schedule the next poll
                }
            }
        };

        checkForNewContestResults(); // Initial call to start polling

        return () => {
            isMounted = false; // Set flag to false to prevent future runs after component unmount
        };
    }, []);

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

export default ContestResultChecker;