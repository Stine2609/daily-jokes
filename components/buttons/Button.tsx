import BaseButton from "./BaseButton";
import colors from "../Colors";

interface ButtonProps {
    label?: string;
    onPress?: () => void;
    height?: number;
    width?: number;
    variant?: "play" | "toggle" | "submit"
}

const variants = {
    "play": {
        leftColor: colors.playButton.bgLeft,
        rightColor: colors.playButton.bgRight,
        highlightColor: colors.playButton.highlight,
        borderRadius: 22,
    },
    "toggle": {
        leftColor: colors.toggleButton.bgLeft,
        rightColor: colors.toggleButton.bgRight,
        highlightColor: colors.toggleButton.highlight,
        borderRadius: 22,
    },
    "submit": {
        leftColor: colors.submitButton.bgLeft,
        rightColor: colors.submitButton.bgRight,
        highlightColor: colors.submitButton.highlight,
        borderRadius: 10,
    },
}

export default function Button({ label, onPress, height, width, variant = "play" }: ButtonProps) {
    return (
        <BaseButton
            onPress={onPress}
            label={label}
            leftColor={variants[variant].leftColor}
            rightColor={variants[variant].rightColor}
            highlightColor={variants[variant].highlightColor}
            borderRadius={variants[variant].borderRadius}
            heightPercentage={height}
            widthPercentage={width}
        />
    );
}