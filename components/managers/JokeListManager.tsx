import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import JokeListItem from "../../components/listItem/JokeListItem";
import { useJokesSearch } from "../../hooks/useJokesSearch";

export default function JokeListManager({ criteria }) {
    const [jokes, setJokes] = useState([]);

    const fetchedJokes = useJokesSearch(criteria);

    useEffect(() => {
        if (fetchedJokes) {
            setJokes(fetchedJokes);
        }
    }, [fetchedJokes]);

    return (
        <View>
            {jokes.length > 0 ? (
                jokes.map((joke, index) => (
                    <JokeListItem key={index} joke={{
                        avatarId: joke.user?.profile ? joke.user.profile : 0, 
                        username: joke.user?.name ? joke.user.name : "", 
                        text: joke.textBody, 
                        position: 1 
                    }} />
                ))
            ) : (
                <Text>No jokes found</Text>
            )}
        </View>
    );
}