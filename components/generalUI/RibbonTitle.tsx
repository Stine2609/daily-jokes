import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import { percentageOf as p } from '../../utils/utils';
import { colors } from '../misc/Colors';

const originalHeight = 68;
const originalWidth = 276;

interface RibbonTitleProps {
    topText?: string;
    bottomText?: string;
}

export default function RibbonTitle(props: RibbonTitleProps) {
    const { topText, bottomText } = props;
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/ribbon.png")} />
            <Text shadow={false} size={14} style={[styles.text, styles.title]}>{topText}</Text>
            <Text shadowColor={colors.pink.dark} size={20} style={[styles.text, styles.message]}>{bottomText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },

    image: {
        position: "absolute",
        alignSelf: "center",
        height: p(100, originalHeight),
        width: p(100, originalWidth),
    },

    text: {
        position: "absolute",
        alignSelf: "center",
    },

    title: {
        color: colors.pink.dark,
        top: 4,
    },

    message: {
        top: 20,
    }
})