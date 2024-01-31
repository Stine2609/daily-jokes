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
    widthPercentage?: number;
    heightPercentage?: number;
    borderWidth?: number;
    buttonWidth?: number;
}

export default function Button(props:ButtonProps) {
    const { 
        leftColor = "#D6AFFE", 
        rightColor = "#C286FF", 
        highlightColor = "#A75CF4", 
        borderRadius = 22,
        onPress,
        label,
        widthPercentage = 100,
        heightPercentage = 40,
        borderWidth = 2.5,
    } = props;

    // Calculates percentage of a number
    function p(perc: number, num: number) {
        return perc / 100 * num
    }

    const buttonWidth = p(widthPercentage, 100);
    const buttonContainerWidth = buttonWidth + (borderWidth * 2);

    const buttonHeight = p(heightPercentage, 100);

    // Calculate polygon points based on percentage width and height
    const leftPolygonPoints = `
        0,${p(heightPercentage, 100)}
        ${p(widthPercentage, 70)},${p(heightPercentage, 100)}
        ${p(widthPercentage, 35)},0
        0,0`;

    const rightPolygonPoints = `
        ${p(widthPercentage, 100)},0
        ${p(widthPercentage, 30)},0
        ${p(widthPercentage, 65)},${p(heightPercentage, 100)}
        ${p(widthPercentage, 100)},${p(heightPercentage, 100)}`;

    return (
        <TouchableOpacity onPress={onPress}>
            <Shadow height={buttonHeight + 10} width={buttonContainerWidth} borderRadius={borderRadius} />
            <View style={[
                styles.container,
                {
                    borderWidth: 2.5,
                    width: buttonContainerWidth,
                    height: buttonHeight + 10,
                    borderRadius: borderRadius
                }
            ]}>
                <View style={[
                    styles.background,
                    {
                        width: buttonWidth,
                        height: buttonHeight + 10,
                        backgroundColor: highlightColor
                    }
                ]} />
                <View style={[
                    styles.innerButtonContainer,
                    {
                        width: buttonWidth,
                        height: buttonHeight,
                        // Make inner button have slightly less border radius, 10% less, it looks better
                        borderBottomLeftRadius: borderRadius - p(10, borderRadius),
                        borderBottomRightRadius: borderRadius - p(10, borderRadius)
                    }
                ]}>
                    <Svg height="100%" width="100%" viewBox={`0 0 ${widthPercentage} ${heightPercentage}`}>
                        <Polygon
                            points={leftPolygonPoints}
                            fill={leftColor}
                        />
                        <Polygon
                            points={rightPolygonPoints}
                            fill={rightColor}
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
        borderColor: colors.button.border,
        overflow: "hidden",
    },

    background: {
        position: "absolute",
    },

    innerButtonContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Make sure SVG does not overflow
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
    },

    buttonText: {
        position: "absolute",
        color: colors.button.text,
        fontSize: 24,
    },
});