import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import Text from '../generalUI/Text';
import JokeListItem from "../../components/listItem/JokeListItem";
import { useJokesSearch } from "../../hooks/useJokesSearch";
import { colors } from '../misc/Colors';

interface joke {
    user?: {
        profile?: number;
        name?: string;
    };
    userId: string;
    textBody: string;
    position: number;
}

interface JokeListManagerProps {
    criteria: {};
}

export default function JokeListManager({ criteria }: JokeListManagerProps) {
    const [jokes, setJokes] = useState<joke[]>([]);

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
                        position: 1,
                        stats: {
                            likes: 20,
                        }
                    }} />
                ))
            ) : (
                <Text shadow={false} style={{textAlign: "center"}} color={colors.purple.dark}>You have not written any jokes yet.</Text>
            )}
        </View>
    );
}