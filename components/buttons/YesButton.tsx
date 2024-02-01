import CircularButton from "./CircularButton";
import colors from "../Colors";

interface YesButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function YesButton({ onPress, size }: YesButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="yes"
            backgroundColor={colors.yesButton.background}
            highlightColor={colors.yesButton.highlight}
        />
    );
}