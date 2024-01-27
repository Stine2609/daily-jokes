import Button from "./Button";
import colors from "./Colors";

interface ToggleButtonProps {
    label?: string;
}

export default function ToggleButton({ label }: ToggleButtonProps) {
    return (
        <Button
            label={label}
            leftColor={colors.toggleButton.bgLeft}
            rightColor={colors.toggleButton.bgRight}
            highlightColor={colors.toggleButton.highlight}
        />
    );
}
