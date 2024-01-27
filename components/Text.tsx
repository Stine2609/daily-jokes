import { ReactNode } from "react";
import { Text as RNText, StyleProp, TextStyle, StyleSheet } from "react-native";
import colors from "./Colors";
import { useFonts } from "expo-font";

interface TextProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    shadow?: Boolean;
    size?: number;
    color?: string;
}

export default function Text(props: TextProps) {
    const {children, style, shadow = false, size = 18, color = "white"} = props;

    const [fontsLoaded] = useFonts({
        "Digitalt": require("../assets/fonts/Digitalt.otf"),
    });
    
    // Render null or a placeholder if fonts aren't loaded
    if (!fontsLoaded) {
        return null;
    }

    return(
        <RNText style={[
            style,
            styles.text,
            shadow ? styles.shadow : null,
            {fontSize: size},
            {color: color},
        ]}>
            {children}
        </RNText>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Digitalt",
        letterSpacing: 1,
        color: colors.text.default,
    },

    shadow: {
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: {width: 0, height: 2.5},
        textShadowRadius: 4
    }
})