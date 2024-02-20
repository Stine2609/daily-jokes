import CircularButton from "./CircularButton";
import { componentColors } from "../Colors";

interface YesButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function YesButton({ onPress, size }: YesButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconName="yes"
            backgroundColor={componentColors.yesButton.background}
            highlightColor={componentColors.yesButton.highlight}
        />
    );
}