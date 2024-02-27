import { View, StyleSheet } from "react-native";
import SwipePicker from "../../components/misc/SwipePicker";

export default function Rate() {
    return(
        <View style={styles.container}>
            <SwipePicker />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})