import Button from "./Button";
import colors from "./Colors";

interface PlayButtonProps {
    label?: string;
}

export default function PlayButton({ label }: PlayButtonProps) {
    return (
        <Button
            label={label}
            leftColor={colors.playButton.bgLeft}
            rightColor={colors.playButton.bgRight}
            highlightColor={colors.playButton.highlight}
        />
    );
}