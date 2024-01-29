import Button from "./Button";
import colors from "../Colors";

interface ToggleButtonProps {
    label?: string;
    onPress?: () => void;
}

export default function ToggleButton({ label, onPress }: ToggleButtonProps) {
    return (
        <Button
            onPress={onPress}
            label={label}
            leftColor={colors.toggleButton.bgLeft}
            rightColor={colors.toggleButton.bgRight}
            highlightColor={colors.toggleButton.highlight}
        />
    );
}
