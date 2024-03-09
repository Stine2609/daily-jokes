import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import Text from './Text';
import { percentageOf as p } from '../../utils/utils';
import { colors } from '../misc/Colors';

const originalRibbonHeight = 68;
const originalRibbonWidth = 276;

const originalStarsHeight = 253;
const originalStarsWidth = 501;

const originalShineHeight = 448;
const originalShineWidth = 989;

interface RibbonTitleProps {
    topText?: string;
    bottomText?: string;
    stars?: boolean;
}

export default function RibbonTitle(props: RibbonTitleProps) {
    const { topText, bottomText, stars } = props;

    // Ref for the animation value
    const rotateScaleAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Setting up the looped animation
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateScaleAnimation, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: true,
                }),
                Animated.timing(rotateScaleAnimation, {
                    toValue: 0,
                    duration: 5000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [rotateScaleAnimation]);

    // Interpolate the rotation and scale from the animated value
    const rotation = rotateScaleAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['-0deg', '1deg', '-1deg'],
    });

    const scale = rotateScaleAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1],
    });

    return(
        <View style={styles.container}>
            <Animated.Image 
                style={[
                    styles.image, 
                    styles.shine,
                    { transform: [{ rotate: rotation }, { scale: scale }] } // Apply the rotation and scale transformations
                ]} 
                source={require("../../assets/ribbon-shine.png")} 
            />
            {stars && (
                <Image style={[styles.image, styles.stars]} source={require("../../assets/ribbon-stars.png")} />
            )}
            <Image style={[styles.image, styles.ribbon]} source={require("../../assets/ribbon.png")} />
            <Text shadow={false} size={14} style={[styles.text, styles.title]}>{topText}</Text>
            <Text shadowColor={colors.pink.highlight} size={20} style={[styles.text, styles.message]}>{bottomText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },

    image: {
        position: "absolute",
        alignSelf: "center",
    },

    ribbon: {
        height: p(100, originalRibbonHeight),
        width: p(100, originalRibbonWidth),
    },

    stars: {
        height: p(35, originalStarsHeight),
        width: p(35, originalStarsWidth),
        zIndex: 2,
        top: -70,
    },

    shine: {
        height: p(35, originalShineHeight),
        width: p(35, originalShineWidth),
        top: -90,
    },

    text: {
        position: "absolute",
        alignSelf: "center",
    },

    title: {
        color: colors.pink.highlight,
        top: 4,
    },

    message: {
        top: 20,
    }
})