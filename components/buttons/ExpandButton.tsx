import CircularButton from "./CircularButton";
import { componentColors } from "../misc/Colors";
import { FontAwesome5 } from '@expo/vector-icons';

interface ExpandButtonProps {
    onPress?: () => void;
    size?: number;
}

export default function ExpandButton({ onPress, size = 40 }: ExpandButtonProps) {
    return (
        <CircularButton
            onPress={onPress}
            iconComponent={<FontAwesome5 name="expand-arrows-alt" size={size / 1.8} color="white" />}
            backgroundColor={componentColors.expandButton.background}
            highlightColor={componentColors.expandButton.highlight}
        />
    );
}