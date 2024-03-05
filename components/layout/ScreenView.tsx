import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { View, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, StyleProp, TextStyle, StatusBar, Keyboard } from 'react-native';
import GradientBackground from './GradientBackground';
import TabBar from '../TabBar/TabBar';

interface ScreenViewProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    scrollView?: boolean;
    hideTabBar?: boolean;
}

export const HEADER_HEIGHT = 64 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0);
export const TAB_BAR_HEIGHT = 100;

export const SCREEN_HEIGHT = Dimensions.get("screen").height - (HEADER_HEIGHT + TAB_BAR_HEIGHT + 20);

export default function ScreenView(props: ScreenViewProps) {
    const { children, style, scrollView = true, hideTabBar = false } = props;
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <GradientBackground />
            <KeyboardAvoidingView style={{ flex: 1 }}>
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
            {!hideTabBar && !keyboardVisible && (
                <TabBar />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        maxHeight: SCREEN_HEIGHT,
        marginTop: HEADER_HEIGHT,
        minHeight: SCREEN_HEIGHT,
    },
});
