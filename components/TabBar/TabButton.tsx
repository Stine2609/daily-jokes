import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../Text";
import Shadow from "../Shadow";
import colors from "../Colors";

interface TabButtonProps {
    label: string;
    background: string;
    highlight: string;
    onPress?: () => void;
}

const width = 64;
const borderWidth = 3;
const shadowWidth = width + borderWidth * 2;

const innerButtonHeight = 60;
const backgroundHeight = innerButtonHeight + 14;

const borderRadius = 15;

export default function TabButton(props:TabButtonProps) {
    const { label, background, highlight, onPress } = props;
    return(
        <TouchableOpacity onPress={onPress}>
            <Shadow width={shadowWidth} height={backgroundHeight} shadowHeight={4} borderRadius={borderRadius} />
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