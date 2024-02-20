import { useState, useEffect } from 'react';
import { loginWithToken as getProfileData } from "../api/auth";
import { useIsFocused } from '@react-navigation/native';
import { storeData, getData } from '../utils/storage'; 

export const useProfile = (date?: Date) => {
    const [profile, setProfile] = useState({ });
    const isFocused = useIsFocused();

    useEffect(() => {
        let isMounted = true;

        const fetchProfile = async () => {
            const storedProfile = await getData('profile');
            if (storedProfile && isMounted) {
                setProfile(storedProfile);
            }

            if (isFocused && isMounted) {
                try {
                    const profile_result = await getProfileData();
                    if (isMounted) {
                        setProfile(profile_result[0]);
                        await storeData('profile', profile_result[0]);
                    }
                } catch (error) {
                    console.error("Failed to fetch topic:", error);
                }
            }
        };

        fetchProfile();

        return () => { isMounted = false; };
    }, [isFocused]);

    return profile;
};