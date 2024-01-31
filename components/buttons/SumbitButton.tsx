import Button from "./Button";
import colors from "../Colors";

interface SubmitButtonProps {
    label?: string;
    onPress?: () => void;
}

export default function SubmitButton({ label, onPress }: SubmitButtonProps) {
    return (
        <Button
            onPress={onPress}
            label={label}
            leftColor={colors.submitButton.bgLeft}
            rightColor={colors.submitButton.bgRight}
            highlightColor={colors.submitButton.highlight}
            borderRadius={10}
            heightPercentage={35}
        />
    );
}