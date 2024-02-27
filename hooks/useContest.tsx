import { useState, useEffect } from 'react';
import { api } from "../api/api";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage'; 

export const useContest = (date?: Date) => {
    const [contest, setContest] = useState({ 
        topic: "",
        date: new Date().toDateString(),
    });
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
                    const contest_info = await api("GET", "/contest");
                    if (isMounted) {
                        setContest(contest_info[0]);
                        await storeData('contest', contest_info[0]);
                    }
                } catch (error) {
                    console.error("Failed to fetch contest:", error);
                }
            }
        };

        fetchTopic();

        return () => { isMounted = false; };
    }, [isFocused]);

    return contest;
};
