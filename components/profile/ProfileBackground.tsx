import { ReactNode } from "react";
import { ImageBackground, View, StyleSheet, Dimensions } from "react-native";
import { getPercentage, percentageOf } from "../../utils/utils";

const backgrounds: Record<number, ReturnType<typeof require>> = {
    0: require("../../assets/backgrounds/0.png"),
    1: require("../../assets/backgrounds/1.png"),
    2: require("../../assets/backgrounds/2.png"),
}

interface ProfileBackgroundProps {
    imageId: number;
    children?: ReactNode;
    sizePercentage?: number;
}

const screenWidth = Dimensions.get("window").width;
const originalImageWidth = 1396;
const originalImageHeight = 784;

// The image fills the whole width of the screen
const imageWidth = screenWidth;
// The height is scaled to fit this new width
const imageHeight = percentageOf(getPercentage(screenWidth, originalImageWidth), originalImageHeight);

export default function ProfileBackground(props: ProfileBackgroundProps) {
    const { imageId, children, sizePercentage } = props;

    return (
        <View>
            <ImageBackground style={{ height: sizePercentage ? percentageOf(sizePercentage, imageHeight) : imageHeight, width: sizePercentage ? percentageOf(sizePercentage, imageWidth) : imageWidth, justifyContent: "center", alignItems: "center" }} source={backgrounds[imageId]}>
                {children}
            </ImageBackground>
        </View>
    )
}