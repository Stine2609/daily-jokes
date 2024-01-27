/**
 * Container for displaying text and various other informations to the user
 * 
 */

import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import colors from "./Colors";
import Text from "./Text";

interface ContentBoxProps {
    children?: ReactNode;
    title: string;
    text?: string;
    textColor?: string;
}

export default function ContentBox(props:ContentBoxProps) {
    const {children, title, text, textColor = colors.contentBox.text} = props;
    return(
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 20,
        backgroundColor: colors.contentBox.background,
        minHeight: 200,
        gap: 10
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