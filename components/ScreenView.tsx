/**
 * The outermost view of any default screen
 * Intended to assure the same default style and functionality across screens
 * 
 */

import { ReactNode } from "react";
import { View, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, StyleProp, TextStyle, StatusBar } from "react-native";
import GradientBackground from "../components/GradientBackground";
import TabBar from "./TabBar/TabBar";

interface ScreenViewProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    scrollView?: boolean;
}

export const HEADER_HEIGHT = 64 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0);
export const TAB_BAR_HEIGHT = 100;

export const SCREEN_HEIGHT = Dimensions.get("screen").height - (HEADER_HEIGHT + TAB_BAR_HEIGHT + 20)

export default function ScreenView(props: ScreenViewProps) {
    const {children, style, scrollView = true} = props;

    return(
        <View style={styles.container}>
            <GradientBackground />
            <KeyboardAvoidingView>
                {scrollView ? (
                    <ScrollView contentContainerStyle={[styles.screenContainer, style]}>
                        {children}
                    </ScrollView>
                ) : (
                    <View style={[styles.screenContainer, style]}>
                        {children}
                    </View>
                )}
            </KeyboardAvoidingView>
            <TabBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    screenContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        maxHeight: SCREEN_HEIGHT,
        marginTop: HEADER_HEIGHT,
        // marginBottom: TAB_BAR_HEIGHT,
        minHeight: SCREEN_HEIGHT,
    },
})