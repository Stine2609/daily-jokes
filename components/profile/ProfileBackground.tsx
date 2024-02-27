import { Image, View, StyleSheet, Dimensions } from "react-native";
import { getPercentage, percentageOf } from "../../utils/utils";

const backgrounds: Record<number, ReturnType<typeof require>> = {
    0: require("../../assets/backgrounds/0.png"),
}

interface ProfileBackgroundProps {
    imageId: number;
}

const screenWidth = Dimensions.get("window").width;
const originalImageWidth = 1396;
const originalImageHeight = 784;

// The image fills the whole width of the screen
const imageWidth = screenWidth;
// The height is scaled to fit this new width
const imageHeight = percentageOf(getPercentage(screenWidth, originalImageWidth), originalImageHeight);

export default function ProfileBackground(props: ProfileBackgroundProps) {
    const { imageId } = props;

    return(
        <View>
            <Image style={{height: imageHeight, width: imageWidth}} source={backgrounds[imageId]} />
        </View>
    )
}