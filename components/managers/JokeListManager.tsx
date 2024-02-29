import React, { useEffect, useState } from 'react';
import { View, Button } from "react-native";
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
    initialCriteria: {
        pagination?: {
            page: number;
        },
        sortBy?: string;
        filters?: object;
        exclude?: object;
    };
}

export default function JokeListManager({ initialCriteria = { sortBy: "-createTimeStamp", pagination: { page: 1 } } }: JokeListManagerProps) {
    const [jokes, setJokes] = useState<joke[]>([]);
    const [page, setPage] = useState(1);
    const [criteria, setCriteria] = useState(initialCriteria);

    const fetchedJokes = useJokesSearch(criteria);

    useEffect(() => {
        if (fetchedJokes) {
            setJokes(prev => [...prev, ...fetchedJokes]);
        }
    }, [fetchedJokes]);

    useEffect(() => {
        setPage(1);
        setCriteria(initialCriteria);
        setJokes([]);
    }, [initialCriteria]);

    useEffect(() => {
        const newCriteria = {
            ...criteria, 
            pagination: { ...criteria.pagination, page: page } 
        };
        setCriteria(newCriteria);
    }, [page]);

    const loadMoreJokes = () => {
        const nextPage = page + 1;
        setPage(nextPage); 
    
        const newCriteria = {
            ...criteria,
            pagination: { ...criteria.pagination, page: nextPage },
        };
        setCriteria(newCriteria);
    };

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
            <Button title="Load More" onPress={loadMoreJokes} />
        </View>
    );
}
