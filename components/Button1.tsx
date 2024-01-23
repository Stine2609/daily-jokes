import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

export default function Button1() {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
            <Svg height="100%" width="100%" viewBox="0 0 100 40">
                {/* Diagonal divide for the left side */}
                <Polygon
                    points="0,40 70,40 35,0 0,0"
                    fill="#D6AFFE" // Left side color
                />
                {/* Diagonal divide for the right side */}
                <Polygon
                    points="100,0 30,0 65,40 100,40"
                    fill="#C286FF" // Right side color
                />
            </Svg>
            <Text style={styles.buttonText}>LABEL</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'relative',
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Make sure SVG does not overflow
        // borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,

        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7,

        elevation: 11,
    },
    buttonText: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
