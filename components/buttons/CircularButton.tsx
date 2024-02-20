import { ReactNode } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { componentColors } from "../Colors";
import {percentageOf as p} from "../../utils/utils";
 
interface CircularButtonProps {
    onPress?: () => void;
    iconName?: "yes" | "no" | "back";
    iconComponent?: ReactNode;
    backgroundColor?: string;
    highlightColor?: string;
    size?: number;
}

const icons = {
    yes: require("../../assets/icons/yes.png"),
    no: require("../../assets/icons/no.png"),
    back: require("../../assets/icons/back.png"),
};

export default function CircularButton(props: CircularButtonProps) {
    const { onPress, iconName, iconComponent, backgroundColor, highlightColor, size = 40 } = props;

    const borderWidth = p(7.5, size);
    const backgroundOffset = p(7, size);

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[
                styles.container,
                {width: size}
            ]}>
                <View style={[
                    styles.background,
                    {
                        backgroundColor: highlightColor,
                        width: size,
                        height: size,
                        top: backgroundOffset,
                    }
                ]} />
                <View style={[
                    styles.innerButtonContainer,
                    {
                        backgroundColor: backgroundColor,
                        width: size,
                        height: size,
                        borderWidth: borderWidth,
                    }
                ]}>
                    {iconName && (
                        <Image
                            style={{
                                height: size / 1.8,
                                width: size / 1.8
                            }}
                            source={icons[iconName]}
                        />
                    )}
                    {iconComponent && (
                        iconComponent
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: "absolute",
        backgroundColor: "transparent",
        borderRadius: 100,
    },

    innerButtonContainer: {
        borderColor: componentColors.button.border,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})