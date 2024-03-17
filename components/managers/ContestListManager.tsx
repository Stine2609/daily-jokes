import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import Text from '../generalUI/Text';
import ContestListItem from "../../components/listItem/ContestListItem";
import { useContestSearch } from '../../hooks/useContestSearch';
import { colors } from '../misc/Colors';
import LoadingIndicator from '../generalUI/LoadingIndicator';
import { formatTimestampToShortDate } from '../../utils/date';
import Button from '../buttons/Button';

interface contest {
    date: string;
    name: string;
    winner: string;
    topic: string;
    id: number;
}

interface ContestListManagerProps {
    initialCriteria: {
        pagination?: {
            page: number;
        },
        sortBy?: string;
        filters?: object;
        exclude?: object;
    };
}

export default function ContestListManager({ initialCriteria = { sortBy: "-date", pagination: { page: 1 } } }: ContestListManagerProps) {
    const [localContests, setLocalContests] = useState<contest[]>([]);
    const [page, setPage] = useState(1);
    const [criteria, setCriteria] = useState(initialCriteria);
    const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);

    const { contests, isLoading } = useContestSearch(criteria);

    useEffect(() => {
        if (contests) {
            setLocalContests(prev => [...prev, ...contests]);
            if (!initialFetchCompleted) setInitialFetchCompleted(true);
        }
    }, [contests]);

    useEffect(() => {
        setPage(1);
        setCriteria(initialCriteria);
        setLocalContests([]);
        setInitialFetchCompleted(false);
    }, [initialCriteria]);

    useEffect(() => {
        const newCriteria = {
            ...criteria, 
            pagination: { ...criteria.pagination, page: page } 
        };
        setCriteria(newCriteria);
    }, [page]);

    const loadMoreContests = () => {
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
            {localContests.length > 0 ? (
                <>
                    {localContests.map((contest, index) => (
                        <ContestListItem
                            key={index}
                            contest={{
                                name: contest.topic,
                                date: contest.date,
                                winner: "TEMPORARY",
                                id: contest.id,
                            }}
                        />
                    ))}
                    {isLoading && <View style={{ height: 50 }}><LoadingIndicator isLoading={isLoading} /></View>}
                </>
            ) : (
                !isLoading && initialFetchCompleted ? (
                    <Text shadow={false} style={{ textAlign: "center" }} color={colors.purple.dark}>No contests found.</Text>
                ) : (
                    <View style={{ height: 50 }}><LoadingIndicator isLoading={isLoading} /></View>
                )
            )}

            {!isLoading && (
                <Button style={{alignSelf: "center", marginTop: 20}} width={200} label="Load More" onPress={loadMoreContests} />
            )}
        </View>
    );
}
