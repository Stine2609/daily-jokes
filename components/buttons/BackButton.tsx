import CircularButton from "./CircularButton";
import { componentColors } from "../misc/Colors";

interface BackButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function BackButton({ onPress, size }: BackButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="back"
            backgroundColor={componentColors.backButton.background}
            highlightColor={componentColors.backButton.highlight}
        />
    );
}