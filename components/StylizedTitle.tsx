import { View, StyleSheet } from "react-native";
import Text from "./Text";
import PulseAnimation from "./PulseAnimation";

interface StylizedTitleProps {
    size?: number;
}

export default function StylizedTitle({size = 35}: StylizedTitleProps) {
    return(
        <PulseAnimation>
            <View style={styles.topContainer}>
                <View style={styles.word1}>
                    <Text size={size} defaultLineHeight>The</Text>
                </View>
                <View style={styles.word2}>
                    <Text size={size} defaultLineHeight>Daily</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.word3}>
                    <Text size={size} defaultLineHeight>Contest</Text>
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
        transform: [{rotate: '-5deg'}],
    },

    word2: {
        transform: [{rotate: '5deg'}]
    },

    word3: {
        transform: [{rotate: '2deg'}],
    },
})