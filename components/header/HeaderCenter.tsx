import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";
import Shadow from "../Shadow";
import { colors } from "../Colors";

interface HeaderCenterProps {
    label: string;
}

export default function HeaderCenter({label = "label"}: HeaderCenterProps) {
    // For keeping the shadow the correct width even if the label changes the width of the container
    const [containerWidth, setContainerWidth] = useState(150);
    const onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    return(
        <View style={styles.container}>
            <Shadow width={containerWidth} height={containerHeight} shadowHeight={4} borderRadius={containerBorderRadius} />
            <View style={styles.textContainer} onLayout={onLayout}>
                <Text size={23} shadow={false}>{label}</Text>
            </View>
        </View>
    )
}

const containerHeight = 36;
const containerWidth = 150;
const containerBorderRadius = 50;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        minWidth: containerWidth,
        height: containerHeight,
    },

    textContainer: {
        borderRadius: containerBorderRadius,
        borderWidth: 2.5,
        borderColor: "white",
        minWidth: containerWidth,
        height: containerHeight,
        backgroundColor: colors.purple.dark,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    }
})