import CircularButton from "./CircularButton";
import colors from "../Colors";

interface NoButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function NoButton({ onPress, size }: NoButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="no"
            backgroundColor={colors.noButton.background}
            highlightColor={colors.noButton.highlight}
        />
    );
}