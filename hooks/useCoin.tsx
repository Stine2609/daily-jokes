import { useState, useEffect } from 'react';
import { get as getCoin } from "../api/coin";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage'; 

export const useCoin = (date?: Date) => {
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
                    const coin_result = await getCoin();
                    if (isMounted) {
                        setCoin(coin_result[0]);
                        await storeData('coin', coin_result[0]);
                    }
                } catch (error) {
                    console.error("Failed to fetch topic:", error);
                }
            }
        };

        fetchCoin();

        return () => { isMounted = false; };
    }, [isFocused]);

    return coin;
};
