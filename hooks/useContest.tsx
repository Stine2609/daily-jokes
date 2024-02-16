import { useState, useEffect, useContext } from 'react';
import { getContest } from "../api/contest";
import { useIsFocused } from '@react-navigation/native'; 

export const useContest = (date?: Date) => {
    const [contest, setContest] = useState({ topic: "" });
    const isFocused = useIsFocused(); 

    useEffect(() => {
        let isMounted = true;

        const fetchTopic = async () => {
            if (isFocused && isMounted) {
                try {
                    const contest_info = await getContest();
                    if (isMounted) {
                        setContest(contest_info[0]);
                    }
                } catch (error) {
                    console.error("Failed to fetch topic:", error);
                }
            }
        };

        fetchTopic();

        return () => { isMounted = false; };
    }, [isFocused]);

    return contest;
};
