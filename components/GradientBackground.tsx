import { View, StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import colors from "./Colors";

export default function GradientBackground() {
    return(
        <View style={styles.container}>
            <Svg height="100%" width="100%">
                <Defs>
                    <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
                        <Stop offset="0%" stopColor={colors.mainBg.start} stopOpacity="1" />
                        <Stop offset="100%" stopColor={colors.mainBg.end} stopOpacity="1" />
                    </RadialGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})