import Button from "./Button";
import colors from "../Colors";

interface PlayButtonProps {
    label?: string;
    onPress?: () => void;
}

export default function PlayButton({ label, onPress }: PlayButtonProps) {
    return (
        <Button
            onPress={onPress}
            label={label}
            leftColor={colors.playButton.bgLeft}
            rightColor={colors.playButton.bgRight}
            highlightColor={colors.playButton.highlight}
            heightPercentage={35}
            widthPercentage={95}
        />
    );
}