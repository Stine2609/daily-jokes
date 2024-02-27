import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import JokeListItem from "../../components/listItem/JokeListItem";
import { useJokesSearch } from "../../hooks/useJokesSearch";

// The JokeListManager component now takes criteria as a prop
export default function JokeListManager({ criteria }) {
    const [jokes, setJokes] = useState([]);

    // Use the useJokesSearch hook to fetch jokes based on the passed criteria
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
                        avatarId: 1, // This could be dynamic based on your data
                        username: joke.userId, // Assuming the field for username is userId
                        text: joke.textBody, // Assuming the field for joke text is textBody
                        position: 1 // This could be dynamic based on your data
                    }} />
                ))
            ) : (
                <Text>No jokes found</Text> // Display a message if no jokes are available
            )}
        </View>
    );
}