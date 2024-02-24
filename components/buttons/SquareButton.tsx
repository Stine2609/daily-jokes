import { ReactNode } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Shadow from "../Shadow";
import { percentageOf as p } from "../../utils/utils";

interface SquareButtonProps {
    children?: ReactNode;
    height?: number,
    width?: number,
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    highlightColor: string;
    backgroundColor: string;
    onPress?: () => null;
}

export default function SquareButton(props: SquareButtonProps) {
    const {
        children,
        height = 64,
        width = 64,
        borderWidth = 3,
        borderColor,
        borderRadius = 15,
        highlightColor,
        backgroundColor,
        onPress,
    } = props;

    const innerHeight = height - p(10, height);

    return(
        <TouchableOpacity activeOpacity={onPress ? 0.2 : 1} onPress={onPress}>
            <Shadow width={width + borderWidth * 2} height={height} shadowHeight={p(4, height)} borderRadius={borderRadius} />
            <View style={[
                styles.container,
                {
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    height: height,
                    borderRadius: borderRadius
                }
            ]}>
                <View style={[
                    styles.background,
                    {
                        width: width,
                        height: height,
                        backgroundColor: highlightColor
                    }
                ]} />
                <View style={[
                    {
                        backgroundColor: backgroundColor,
                        width: width,
                        height: innerHeight,
                        borderBottomRightRadius: borderRadius - 2,
                        borderBottomLeftRadius: borderRadius - 2,
                    }
                ]}>
                    <View style={[
                        styles.innerButtonContainer,
                        {
                            height: innerHeight,
                        }
                    ]}>
                        {children}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
    },

    background: {
        position: "absolute",
    },

    innerButtonContainer: {
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
    },
})