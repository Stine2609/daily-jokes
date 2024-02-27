import { View, Image, StyleSheet } from "react-native";
import Text from "../generalUI/Text";

export default function CoinCount() {
    return(
        <View style={styles.container}>
            <Text size={16}>1251</Text>
            <Image style={styles.image} source={require("../../assets/icons/coin.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },

    image: {
        width: 16,
        height: 16,
    }
})