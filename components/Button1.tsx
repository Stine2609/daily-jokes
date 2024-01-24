import Button from "./Button";

interface Button1Props {
    label?: string;
}

export default function Button1({ label }: Button1Props) {
    return (
        <Button
            label={label}
            leftColor="#D6AFFE"
            rightColor="#C286FF"
            backgroundColor="#A75CF4"
        />
    );
}
