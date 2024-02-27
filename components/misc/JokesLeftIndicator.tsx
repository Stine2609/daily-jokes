import React, { useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet } from "react-native";
import { componentColors } from "./Colors";
import { useJokeSubmission } from "../../hooks/useJokeSubmission";

const JokesLeftIndicator = forwardRef((props, ref) => {
    const { jokeSubmission, refresh } = useJokeSubmission();

    useImperativeHandle(ref, () => ({
        refreshIndicator: () => {
            refresh();
        }
    }));

    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <View style={[styles.circle, jokeSubmission.jokesSubmitted - (3 + jokeSubmission.additionalSlotsPurchased) <= -1 ? styles.used : null]} />
            <View style={[styles.circle, jokeSubmission.jokesSubmitted - (3 + jokeSubmission.additionalSlotsPurchased) <= -2 ? styles.used : null]} />
            <View style={[styles.circle, jokeSubmission.jokesSubmitted - (3 + jokeSubmission.additionalSlotsPurchased) <= -3 ? styles.used : null]} />
        </View>
    );
});

export default JokesLeftIndicator;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 16,
        gap: 6,
        overflow: "hidden",
    },

    line: {
        position: "absolute",
        width: "100%",
        height: 2,
        backgroundColor: "white",
        top: "46%"
    },

    circle: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        height: 24,
        width: 24,
        backgroundColor: componentColors.contentTab.background,
    },

    used: {
        backgroundColor: componentColors.contentBox.highlight,
    }
})