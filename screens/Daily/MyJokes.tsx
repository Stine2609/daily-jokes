import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import ContentBox from "../../components/ContentBox";
import { colors } from "../../components/Colors";
import { UserDataManager } from '../../services/userDataManager';
import { useContest } from '../../hooks/useContest';
import JokeListManager from '../../components/managers/JokeListManager';

export default function MyJokes() {
    const [criteria, setCriteria] = useState({}); 
    
    const contest = useContest();

    useEffect(() => {
        const fetchUserId = async () => {
            const userDetails = await UserDataManager.getUserDetails();
            setCriteria({ userId: userDetails.id, contestId: contest.id }); 
        };

        fetchUserId();
    }, [contest]);

    return (
        <View>
            <ContentBox headerColor={colors.purple.medium}>
                <JokeListManager criteria={criteria}></JokeListManager>
            </ContentBox>
        </View>
    );
}
