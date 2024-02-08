import CircularButton from "./CircularButton";
import colors from "../Colors";

interface BackButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function BackButton({ onPress, size }: BackButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="back"
            backgroundColor={colors.backButton.background}
            highlightColor={colors.backButton.highlight}
        />
    );
}