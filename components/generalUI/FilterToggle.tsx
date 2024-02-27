import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Text from "./Text";
import { colors } from "../misc/Colors";

interface FilterToggleProps {
    options: Array<{
        label: string;
        onPress?: () => null;
    }>
}

export default function FilterToggle(props: FilterToggleProps) {
    const { options } = props;

    // First option passed is set as active
    const [activeFilter, setActiveFilter] = useState(0);
    
    return(
        <View style={styles.container}>
            {options.map((option, index) => 
                <TouchableOpacity key={option.label + index} style={[styles.button, {backgroundColor: activeFilter == index ? colors.purple.highlight : colors.purple.dark}]} onPress={() => {
                    setActiveFilter(index);
                }}>
                    {activeFilter == index && (
                        <Image style={[styles.icon]} source={require("../../assets/icons/check.png")} />
                    )}
                    <Text shadow={false}>{option.label}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "80%",
        alignSelf: "center",
        gap: 10,
        marginTop: 6,
        marginBottom: 16,
    },

    button: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: colors.purple.dark,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 2,
        borderColor: colors.border,
        borderRadius: 10,
        minWidth: 75,
        justifyContent: "center",
    },

    icon: {
        height: 20,
        width: 20,
    }
})