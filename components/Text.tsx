import React, { ReactNode } from "react";
import { Text as RNText, StyleProp, TextStyle, StyleSheet, LayoutChangeEvent } from "react-native";
import colors from "./Colors";
import { useFonts } from "expo-font";

interface TextProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    shadow?: boolean;
    size?: number;
    color?: string;
    defaultLineHeight?: boolean;
    onLayout?: (event: LayoutChangeEvent) => void;
}

export default function Text(props: TextProps) {
    const { children, style, shadow = false, size = 18, color = "white", defaultLineHeight = false, onLayout } = props;

    const [fontsLoaded] = useFonts({
        "Digitalt": require("../assets/fonts/Digitalt.otf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <RNText
            onLayout={onLayout}
            style={[
                style,
                textStyles.text,
                shadow ? textStyles.shadow : null,
                { fontSize: size },
                { color: color },
                defaultLineHeight ? null : { lineHeight: 22 },
            ]}>
            {children}
        </RNText>
    );
}

const textStyles = StyleSheet.create({
    text: {
        fontFamily: "Digitalt",
        letterSpacing: 1,
        color: colors.text.default,
        fontSize: 18,
    },

    shadow: {
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: {width: 0, height: 2.5},
        textShadowRadius: 4
    }
})

export { textStyles };