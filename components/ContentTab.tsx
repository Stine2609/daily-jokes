import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import colors from "./Colors";
import Text from "./Text";

interface ContentTabProps {
    tabs: Array<{
        name: string;
        component: React.ReactNode;
    }>
}

export default function ContentTab(props: ContentTabProps) {
    const { tabs } = props;
    const [activeTab, setActiveTab] = useState(0);

    // Initialize the position with the activeTab
    // Convert activeTab index to a percentage
    const initialPosition = activeTab * 50; // Since we have 3 tabs, each tab change represents a 50% shift
    const position = useRef(new Animated.Value(initialPosition)).current;

    useEffect(() => {
        // Calculate the new position based on the activeTab
        const newPosition = activeTab * 50; // Each tab change moves the position by 50%
        
        Animated.spring(position, {
            toValue: newPosition,
            useNativeDriver: false,
        }).start();
    }, [activeTab]);

    const animatedStyle = {
        left: position.interpolate({
            inputRange: [0, 50, 100],
            outputRange: ["0%", "34%", "68%"], // Map input range to left percentage values
        }),
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Animated.View style={[styles.focusedContainer, animatedStyle]} />
                {tabs.map((tab, index) =>
                    <TouchableOpacity
                        style={styles.tabButton}
                        key={"TabButton-" + index}
                        onPress={() => setActiveTab(index)}
                    >
                        <Text>{tab.name}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View>
                {tabs[activeTab].component}
            </View>
        </View>
    );
}

const buttonHeight = 46;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10,
    },

    focusedContainer: {
        position: "absolute",
        borderColor: colors.contentTab.border,
        borderWidth: 2,
        backgroundColor: colors.contentTab.focused,
        borderRadius: 50,
        width: "33%", // Each tab button takes up one third of the container width
        height: buttonHeight + 4,
    },

    tabButton: {
        backgroundColor: "transparent",
        borderRadius: 50,
        borderColor: colors.contentTab.border,
        height: buttonHeight,
        width: "33%",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
        height: buttonHeight + 4,
        backgroundColor: colors.contentTab.background,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.contentTab.border,
        overflow: "hidden",
    },
});
