import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../misc/Colors';


const LoadingIndicator = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) return null;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={colors.blue.medium} />
        </View>
    );
};

export default LoadingIndicator;