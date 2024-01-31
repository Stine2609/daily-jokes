/**
 * Container for displaying text and various other informations to the user
 * 
 */
import { ReactNode, useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "./Colors";
import Text from "./Text";
import Shadow from "./Shadow";

interface ContentBoxProps {
    children?: ReactNode;
    title: string;
    text?: string;
    textColor?: string;
}

export default function ContentBox(props:ContentBoxProps) {
    const {children, title, text, textColor = colors.contentBox.text} = props;

    const [containerHeight, setContainerHeight] = useState(200); // Default minHeight

    // Whenever the layout changes, check the height of the contentBox,
    // This assures the shadow knows the height of the box, even when it become bigger than 200
    const onLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setContainerHeight(height);
    };

    return(
        <View style={styles.container}>
            <Shadow height={containerHeight} shadowHeight={8} width={"80%"} borderRadius={20} />
            <View style={[
                    styles.background,
                    {height: containerHeight + 4}
                ]} />
            <View style={styles.contentBoxContainer} onLayout={onLayout}>
                <View style={styles.titleContainer}>
                    <Text>{title}</Text>
                </View>
                {text && (
                    <View style={styles.textContainer}>
                        <Text color={textColor}>{text}</Text>
                    </View>
                )}
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },

    contentBoxContainer: {
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 20,
        backgroundColor: colors.contentBox.background,
        minHeight: 200,
        gap: 10
    },

    background: {
        position: "absolute",
        backgroundColor: colors.contentBox.backgroundHighlight,
        width: "80%",
        borderRadius: 20,
    },

    titleContainer: {
        backgroundColor: colors.contentBox.highlight,
        borderRadius: 20,
        height: 26,
        justifyContent: "center",
        alignItems: "center",
    },

    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
    }
})