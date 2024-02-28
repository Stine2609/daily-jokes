import { View, Image, StyleSheet } from "react-native";
import Text from "../generalUI/Text";
import { useCoin } from "../../hooks/useCoin";

export default function CoinCount() {
    let coin = useCoin();

    return(
        <View style={styles.container}>
            <Text size={16}>{coin.coins}</Text>
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