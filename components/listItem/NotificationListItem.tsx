import ListItem from "./ListItem";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../misc/Colors";

const images = {
    "coins-small": require("../../assets/images/coins-small.png"),
    "coins-medium": require("../../assets/images/coins-medium.png"),
    "coins-big": require("../../assets/images/coins-big.png"),
    "coins-chest": require("../../assets/images/coins-chest.png"),
    "info": require("../../assets/icons/info.png"),
}

interface NotificationListItemProps {
    icon: "coins-small" | "coins-medium" | "coins-big" | "coins-chest" | "info";
    title: string;
    text?: string;
    date?: string;
}

export default function NotificationListItem(props: NotificationListItemProps) {
    const { icon, title, text, date } = props;
    return(
        <ListItem
            noBox
            left={
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={images[icon]} />
                </View>
            }
            useDefaultCenter
            centerTitle={title}
            centerText={text}
            centerBottomText={date}
            useDefaultRight
        />
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 100,
        overflow: "hidden",
        height: 48,
        width: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blue.medium,
    },

    image: {
        height: 44,
        width: 44,
    }
})