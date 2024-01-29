import { TouchableOpacity, View, StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import Text from "../Text";
import colors from "../Colors";
import Shadow from "../Shadow";

interface ButtonProps {
    leftColor?: string;
    rightColor?: string;
    highlightColor?: string;
    borderRadius?: number;
    onPress?: () => void;
    label?: string;
}

export default function Button(props:ButtonProps) {
    const { leftColor = "#D6AFFE", rightColor = "#C286FF", highlightColor = "#A75CF4", borderRadius = 22, onPress, label } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Shadow height={50} width={105} borderRadius={borderRadius} />
            <View style={[styles.container, {borderRadius: borderRadius}]}>
                <View style={[styles.background, {backgroundColor: highlightColor}]} />
                <View style={styles.innerButtonContainer}>
                    <Svg height="100%" width="100%" viewBox="0 0 100 40">
                        {/* Diagonal divide for the left side */}
                        <Polygon
                            points="0,40 70,40 35,0 0,0"
                            fill={leftColor} // Left side color
                        />
                        {/* Diagonal divide for the right side */}
                        <Polygon
                            points="100,0 30,0 65,40 100,40"
                            fill={rightColor} // Right side color
                        />
                    </Svg>
                    <Text style={styles.buttonText}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2.5,
        borderColor: colors.button.border,
        overflow: "hidden",
        height: 50
    },

    background: {
        position: "absolute",
        width: 100,
        height: 50,
    },

    innerButtonContainer: {
        position: "relative",
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Make sure SVG does not overflow
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    buttonText: {
        position: "absolute",
        color: colors.button.text,
        fontSize: 24,
    },
});