import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import PulseAnimation from "./PulseAnimation";

interface StylizedTitleProps {
    size?: number;
    dailyJokes?: boolean;
}

export default function StylizedTitle({size = 40, dailyJokes}: StylizedTitleProps) {
    return(
        <PulseAnimation>
            {dailyJokes ? (
                <>
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
                </>
            ) : (
                <Image style={{height: size * 2 + 10, width: size * 4}} source={require("../assets/daily-jokes.png")} />
            )}
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