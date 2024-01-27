/**
 * The outermost view of any default screen
 * Intended to assure the same default style and functionality across screens
 * 
 */

import { ReactNode } from "react";
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import GradientBackground from "../components/GradientBackground";

interface ScreenViewProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>
}

export default function ScreenView(props: ScreenViewProps) {
    const {children, style} = props;
    return(
        <View style={[style, styles.container]}>
            <GradientBackground />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    }
})