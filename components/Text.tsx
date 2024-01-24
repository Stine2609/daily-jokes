import { ReactNode } from "react";
import { Text as RNText, StyleProp, TextStyle, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

interface TextProps {
    children?: ReactNode;
    style?: StyleProp<TextStyle>
}

export default function Text(props: TextProps) {
    const {children, style} = props;

    const [fontsLoaded] = useFonts({
        'Digitalt': require('../assets/fonts/Digitalt.otf'),
    });
    
    // Render null or a placeholder if fonts aren't loaded
    if (!fontsLoaded) {
        return null;
    }

    return(
        <RNText style={[styles.text, style]}>
            {children}
        </RNText>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Digitalt',
        letterSpacing: 3,
        
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 10
    }
})