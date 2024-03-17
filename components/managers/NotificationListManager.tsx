import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import Text from '../generalUI/Text';
import NotificationListItem from "../../components/listItem/NotificationListItem";
import { useNotificationsSearch } from '../../hooks/useNotificationsSearch';
import { colors } from '../misc/Colors';
import LoadingIndicator from '../generalUI/LoadingIndicator';
import { formatTimestampToShortDate } from '../../utils/date';
import Button from '../buttons/Button';

interface notification {
    date: string;
    title: string;
    body: string;
    type: string;
    createdAt: string;
}

interface NotificationListManagerProps {
    initialCriteria: {
        pagination?: {
            page: number;
        },
        sortBy?: string;
        filters?: object;
        exclude?: object;
    };
}

export default function NotificationListManager({ initialCriteria = { sortBy: "-createdAt", pagination: { page: 1 } } }: NotificationListManagerProps) {
    const [localNotifications, setLocalNotifications] = useState<notification[]>([]);
    const [page, setPage] = useState(1);
    const [criteria, setCriteria] = useState(initialCriteria);
    const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);

    const { notifications, isLoading } = useNotificationsSearch(criteria);

    useEffect(() => {
        if (notifications) {
            setLocalNotifications(prev => [...prev, ...notifications]);
            if (!initialFetchCompleted) setInitialFetchCompleted(true);
        }
    }, [notifications]);

    useEffect(() => {
        setPage(1);
        setCriteria(initialCriteria);
        setLocalNotifications([]);
        setInitialFetchCompleted(false);
    }, [initialCriteria]);

    useEffect(() => {
        const newCriteria = {
            ...criteria, 
            pagination: { ...criteria.pagination, page: page } 
        };
        setCriteria(newCriteria);
    }, [page]);

    const loadMoreNotifications = () => {
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
            {localNotifications.length > 0 ? (
                <>
                    {localNotifications.map((notification, index) => (
                        <NotificationListItem
                            key={index}
                            icon={"info"}
                            title={notification.title}
                            text={notification.body}
                            date={formatTimestampToShortDate(notification.createdAt)}
                        />
                    ))}
                    {isLoading && <View style={{ height: 50 }}><LoadingIndicator isLoading={isLoading} /></View>}
                </>
            ) : (
                !isLoading && initialFetchCompleted ? (
                    <Text shadow={false} style={{ textAlign: "center" }} color={colors.purple.dark}>No notifications found.</Text>
                ) : (
                    <View style={{ height: 50 }}><LoadingIndicator isLoading={isLoading} /></View>
                )
            )}

            {!isLoading && (
                <Button style={{alignSelf: "center", marginTop: 20}} width={200} label="Load More" onPress={loadMoreNotifications} />
            )}
        </View>
    );
}
