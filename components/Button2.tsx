import Button from "./Button";

interface Button2Props {
    label?: string;
}

export default function Button2({ label }: Button2Props) {
    return (
        <Button
            label={label}
            leftColor="#A6F208"
            rightColor="#67EB00"
            backgroundColor="#4EC307"
        />
    );
}