import { useState, useEffect } from 'react';
import { getContest } from "../api/contest";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage'; 

export const useContest = (date?: Date) => {
    const [contest, setContest] = useState({ topic: "" });
    const isFocused = useIsFocused();

    useEffect(() => {
        let isMounted = true;

        const fetchTopic = async () => {
            const storedContest = await getData('contest');
            if (storedContest && isMounted) {
                setContest(storedContest);
            }

            if (isFocused && isMounted) {
                try {
                    const contest_info = await getContest(date);
                    if (isMounted) {
                        setContest(contest_info[0]);
                        await storeData('contest', contest_info[0]);
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
