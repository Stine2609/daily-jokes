import ToggleButton from "../../components/buttons/ToggleButton";
import { View, StyleSheet } from "react-native";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

export default function DailyTabBar() {

    const navigation = useNavigation<NavigationProp<ParamListBase>>()
    return(
        <View style={styles.container}>
            <ToggleButton onPress={() => navigation.navigate("Write")} label="Write" />
            <ToggleButton onPress={() => navigation.navigate("Rate")} label="Rate" />
            <ToggleButton onPress={() => navigation.navigate("My Jokes")} label="My jokes" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        width: "100%"
    }
})