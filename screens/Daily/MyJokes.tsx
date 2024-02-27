import React, { useEffect, useState, useContext } from 'react';
import { View } from "react-native";
import ContentBox from "../../components/ContentBox";
import { colors } from "../../components/Colors";
import { UserDataManager } from '../../services/userDataManager';
import { useContest } from '../../hooks/useContest';
import JokeListManager from '../../components/managers/JokeListManager';
import ActiveTabContext from '../../context/ActiveTabContext';

export default function MyJokes() {
    const { activeTab } = useContext(ActiveTabContext);
    const [criteria, setCriteria] = useState({ userId: -1, contestId: -1 }); 
    
    const contest = useContest();

    useEffect(() => {
        if(activeTab === 2) {
            const fetchUserId = async () => {
                const userDetails = await UserDataManager.getUserDetails();
                setCriteria({ userId: userDetails.id, contestId: contest.id }); 
            };

            fetchUserId();
        }
    }, [activeTab, contest]);

    return (
        <View>
            <ContentBox headerColor={colors.purple.medium}>
                <JokeListManager criteria={criteria}></JokeListManager>
            </ContentBox>
        </View>
    );
}
