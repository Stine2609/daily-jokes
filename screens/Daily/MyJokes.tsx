import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import JokeListItem from "../../components/listItem/JokeListItem";
import ContentBox from "../../components/ContentBox";
import { colors } from "../../components/Colors";
import { useJokesSearch } from "../../hooks/useJokesSearch";
import { UserDataManager } from '../../services/userDataManager';
import { useContest } from '../../hooks/useContest';

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

    const jokes = useJokesSearch(criteria);

    return (
        <View>
            <ContentBox headerColor={colors.purple.medium}>
                {jokes.length > 0 ? (
                    jokes.map((joke, index) => (
                        <JokeListItem key={index} joke={{
                            avatarId: 1, // Set AvatarID to 1 for all jokes
                            username: joke.userId, // Assume the field for username is userId
                            text: joke.textBody, // Assume the field for joke text is textBody
                            position: 1 // Set position to 1 for all jokes
                        }} />
                    ))
                ) : (
                    <Text>No jokes found</Text> // Display a message if no jokes are available
                )}
            </ContentBox>
        </View>
    );
}
