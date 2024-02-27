import { useState, useEffect } from 'react';
import { api } from "../api/api";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage'; 
import { UserDataManager } from '../services/userDataManager';

export const useCoin = () => {
    const [coin, setCoin] = useState({ coins: 0 });
    const isFocused = useIsFocused();

    useEffect(() => {
        let isMounted = true;

        const fetchCoin = async () => {
            const storedCoin = await getData('coin');
            if (storedCoin && isMounted) {
                setCoin(storedCoin);
            }

            if (isFocused && isMounted) {
                try {
                    const coin_result = await api("GET", "/joke", undefined, await UserDataManager.getToken());
                    if (isMounted) {
                        setCoin(coin_result);
                        await storeData('coin', coin_result);
                    }
                } catch (error) {
                    console.error("Failed to fetch coin:", error);
                }
            }
        };

        fetchCoin();

        return () => { isMounted = false; };
    }, [isFocused]);

    return coin;
};
