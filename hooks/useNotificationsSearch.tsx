import { useState, useEffect } from 'react';
import { api } from "../api/api";
import { useIsFocused } from '@react-navigation/native';
import { UserDataManager } from '../services/userDataManager';

export const useNotificationsSearch = (criteria?: Object) => {
    const [notifications, setNotifications] = useState([]);
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchNotifications = async () => {
            if (isFocused && isMounted) {
                setIsLoading(true);
                try {
                    const notifications_result = await api("POST", "/notification", criteria, await UserDataManager.getToken());
                    if (isMounted) {
                        setNotifications(notifications_result);
                    }
                } catch (error) {
                    console.error("Failed to fetch notifications:", error);
                }
                setIsLoading(false);
            }
        };

        fetchNotifications();

        return () => { isMounted = false; };
    }, [isFocused, criteria]);

    return { notifications, isLoading };
};