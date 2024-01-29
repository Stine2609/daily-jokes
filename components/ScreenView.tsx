/**
 * The outermost view of any default screen
 * Intended to assure the same default style and functionality across screens
 * 
 */

import { ReactNode } from "react";
import { View, Dimensions, SafeAreaView, ScrollView, StyleSheet, StyleProp, TextStyle, StatusBar } from "react-native";
import GradientBackground from "../components/GradientBackground";
import TabBar from "./TabBar/TabBar";

interface ScreenViewProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    scrollView?: boolean;
}

const HEADER_HEIGHT = 64 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0);
const TAB_BAR_HEIGHT = 100;

export default function ScreenView(props: ScreenViewProps) {
    const {children, style, scrollView = true} = props;

    return(
        <View style={styles.container}>
            <GradientBackground />
            {scrollView ? (
                <ScrollView contentContainerStyle={[styles.screenContainer, style]}>
                    {children}
                </ScrollView>
            ) : (
                <View style={[styles.screenContainer, style]}>
                    {children}
                </View>
            )}

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
        paddingTop: HEADER_HEIGHT + 20, // Plus 20 for some whitespace
        paddingBottom: TAB_BAR_HEIGHT + 20,
        minHeight: Dimensions.get("screen").height - (HEADER_HEIGHT + TAB_BAR_HEIGHT),
    },
})