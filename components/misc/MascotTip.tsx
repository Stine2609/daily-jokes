import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import Text from "../generalUI/Text";
import { colors } from "./Colors";

interface MascotTipProps {
    containerHeight?: number;
    message?: string;
    size?: number;
}

export default function MascotTip(props: MascotTipProps) {
    const {containerHeight = 100, message = "THERE's 3 hours and 23 minutes left!", size = 250} = props;
    // Refs for animated values
    const mascotAnim = useRef(new Animated.Value(100)).current; // Initial position off-screen to the right
    const messageAnim = useRef(new Animated.Value(0)).current; // Initial scale

    useEffect(() => {
        // Mascot animation (swinging in from the right)
        Animated.spring(mascotAnim, {
            toValue: 0, // Target position, adjust based on your layout
            useNativeDriver: true,
        }).start();

        // Message animation (scaling up)
        Animated.spring(messageAnim, {
            toValue: 1, // Target scale
            delay: 500, // Delay after mascot animation
            useNativeDriver: true,
        }).start();
    }, [mascotAnim, messageAnim]);

    return (
        <View style={[styles.container, { height: containerHeight }]}>
            <Animated.Image
                style={[
                    styles.mascot,
                    {
                        height: size,
                        width: size / 2,
                        top: -(size / 3),
                        transform: [{ translateX: mascotAnim }, { rotate: '-25deg' }],
                    },
                ]}
                source={require('../../assets/mascot.png')}
            />
            <Animated.View
                style={[
                    styles.message,
                    {
                        transform: [{ scale: messageAnim }],
                    },
                ]}
            >
                <Text style={{ textAlign: 'center' }}>{message}</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
        width: '100%',
    },

    mascot: {
        position: 'absolute',
        right: -50,
        aspectRatio: 2 / 3,
    },

    message: {
        position: 'absolute',
        top: 0,
        right: 85,
        backgroundColor: colors.purple.light,
        maxWidth: 200,
        minWidth: 150,
        minHeight: 75,
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
    },
});
