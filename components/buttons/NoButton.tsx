import CircularButton from "./CircularButton";
import { componentColors } from "../Colors";

interface NoButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function NoButton({ onPress, size }: NoButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="no"
            backgroundColor={componentColors.noButton.background}
            highlightColor={componentColors.noButton.highlight}
        />
    );
}