import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { componentColors } from "./Colors";
import Text from "./Text";
import Shadow from "./Shadow";

interface ContentTabProps {
    tabs: Array<{
        name: string;
        component: React.ReactNode;
    }>
}

export default function ContentTab(props: ContentTabProps) {
    const { tabs } = props;
    const [activeTab, setActiveTab] = useState(0);

    // Calculate width in percentage based on the number of tabs
    const tabWidthPercent = 100 / tabs.length;

    // Initialize the position with the activeTab
    // Convert activeTab index to a percentage
    const initialPosition = activeTab * tabWidthPercent;
    const position = useRef(new Animated.Value(initialPosition)).current;

    useEffect(() => {
        // Calculate the new position based on the activeTab
        const newPosition = activeTab * tabWidthPercent;
        
        Animated.spring(position, {
            toValue: newPosition,
            useNativeDriver: false,
        }).start();
    }, [activeTab]);

    const animatedStyle = {
        left: position.interpolate({
            inputRange: tabs.map((_, index) => (100 / (tabs.length)) * index),
            outputRange: tabs.map((_, index) => (
                // For last and first, push the element slightly further to the right or left
                // In order to avoid ugly doubling of borders
                (tabWidthPercent * index + (index == 0 ? -0.5 : 0) + (index == tabs.length - 1 ? 0.5 : 0)) + "%"
            )),
        })
    };

    return (
        <View style={styles.container}>
            <Shadow style={{alignSelf: "center"}} height={buttonContainerHeight} shadowHeight={5} width={"80%"} borderRadius={50} />
            <View style={styles.buttonContainer}>
                <Animated.View style={[styles.focusedContainer, animatedStyle, {width: `${tabWidthPercent}%`}]} />
                {tabs.map((tab, index) =>
                    <TouchableOpacity
                        style={[styles.tabButton, { width: `${tabWidthPercent}%` }]}
                        key={"TabButton-" + index}
                        onPress={() => setActiveTab(index)}
                    >
                        <Text>{tab.name}</Text>
                    </TouchableOpacity>
                )}
            </View>

            {tabs.map((tab, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.tabContent,
                        {
                            // Position all tab contents in the same space
                            position: 'absolute',
                            opacity: activeTab === index ? 1 : 0,
                            // Use the entire parent space
                            top: 75,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            // Ensure only the active tab is interactable
                            zIndex: activeTab === index ? 1 : 0,
                        },
                    ]}
                >
                    {tab.component}
                </Animated.View>
            ))}

        </View>
    );
}

const buttonHeight = 46;
const buttonContainerHeight = buttonHeight + 4

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: 'relative',
        flex: 1,
    },
    tabContent: {
        width: '100%',
        height: '100%',
    },

    focusedContainer: {
        position: "absolute",
        borderColor: componentColors.contentTab.border,
        borderWidth: 2,
        backgroundColor: componentColors.contentTab.focused,
        borderRadius: 50,
        height: buttonContainerHeight,
    },

    tabButton: {
        backgroundColor: "transparent",
        borderRadius: 50,
        borderColor: componentColors.contentTab.border,
        height: buttonHeight,
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
        height: buttonContainerHeight,
        backgroundColor: componentColors.contentTab.background,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: componentColors.contentTab.border,
        overflow: "hidden",
    },
});
