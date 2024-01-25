import { View, StyleSheet } from "react-native";
import Text from "../Text";

interface DayCountProps {
    label: string;
}

export default function DayCount({label}: DayCountProps) {
    return(
        <View style={styles.container}>
            <Text size={26} shadow={false}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        minWidth: 150,
        height: 40,
        borderWidth: 4,
        borderColor: "white",
        backgroundColor: "#9F51FE",
        justifyContent: "center",
        alignItems: "center",
    }
})