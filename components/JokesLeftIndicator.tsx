import { View, StyleSheet } from "react-native";
import { componentColors } from "./Colors";

interface JokesLeftIndicatorProps {
    used: 0 | 1 | 2 | 3;
}

export default function JokesLeftIndicator({ used }: JokesLeftIndicatorProps) {
    return(
        <View style={styles.container}>
            <View style={styles.line} />
            <View style={[styles.circle, used > 0 ? styles.used : null]} />
            <View style={[styles.circle, used > 1 ? styles.used : null]} />
            <View style={[styles.circle, used > 2 ? styles.used : null]} />
        </View>
    )
}

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