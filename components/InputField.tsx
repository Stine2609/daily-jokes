import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { textStyles } from "./Text";
import colors from "./Colors";

interface InputFieldProps extends TextInputProps {
    placeholderTextColor?: string;
}

export default function InputField(props: InputFieldProps) {
    const { placeholderTextColor = colors.text.placeholder, ...rest } = props;
    return(
        <TextInput
            style={[textStyles.text, textStyles.shadow, {color: colors.text.contentBox}, styles.input]}
            placeholderTextColor={placeholderTextColor}
            multiline
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        textAlignVertical: "top",
        minHeight: 80
    },
})