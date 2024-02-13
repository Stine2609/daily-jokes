// hooks/useContestTopic.js
import { useState, useEffect } from 'react';
import { getContest } from "../api/contest";

export const useContest = (date?: Date) => {

    const [contest, setContest] = useState({ topic: "" });

    useEffect(() => {
        let isMounted = true;
        const fetchTopic = async () => {
            try {
                const contest_info = await getContest();
                if (isMounted) {
                    setContest(contest_info[0]);
                }
            } catch (error) {
                console.error("Failed to fetch topic:", error);
            }
        };

        fetchTopic();
        return () => { isMounted = false; };
    }, []);

    return contest;
};
