import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../Text";
import Shadow from "../Shadow";
import colors from "../Colors";

interface TabButtonProps {
    label: string;
    background: string;
    highlight: string;
}

const width = 64;
const borderWidth = 3;
const shadowWidth = width + borderWidth * 2;

const innerButtonHeight = 64;
const backgroundHeight = innerButtonHeight + 14;
const shadowHeight = backgroundHeight + 5;

const borderRadius = 15;

export default function TabButton(props:TabButtonProps) {
    const { label, background, highlight } = props;
    return(
        <TouchableOpacity>
            <Shadow width={shadowWidth} height={shadowHeight} borderRadius={borderRadius} />
            <View style={styles.container}>
                <View style={[styles.background, {backgroundColor: highlight}]} />
                <View style={[styles.innerButtonContainer, {backgroundColor: background}]}>
                    <Text size={14} style={{textAlign: "center"}}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: borderWidth,
        borderColor: colors.tabBar.border,
        overflow: "hidden",
        height: backgroundHeight,
        borderRadius: borderRadius
    },

    background: {
        width: width,
        height: backgroundHeight,
        position: "absolute",
    },

    innerButtonContainer: {
        height: innerButtonHeight,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: borderRadius - 2,
        borderBottomLeftRadius: borderRadius - 2,
    }
})