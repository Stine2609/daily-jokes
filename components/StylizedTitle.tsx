import { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import PulseAnimation from "./PulseAnimation";

export default function StylizedTitle() {
    return(
        <PulseAnimation>
            <View style={styles.topContainer}>
                <View style={styles.word1}>
                    <Text size={55}>The</Text>
                </View>
                <View style={styles.word2}>
                    <Text size={55}>Daily</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.word3}>
                    <Text size={55}>Contest</Text>
                </View>
            </View>
        </PulseAnimation>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },

    bottomContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    
    word1: {
        transform: [{rotate: '-5deg'}]
    },

    word2: {
        transform: [{rotate: '5deg'}]
    },

    word3: {
        transform: [{rotate: '2deg'}],
    },
})