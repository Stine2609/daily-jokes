import { Image, StyleSheet } from "react-native";

interface AvatarProps {
    id: number;
    size?: number;
}

export default function Avatar(props: AvatarProps) {
    const { id, size = 48 } = props;

    type AvatarSource = ReturnType<typeof require>;
    const avatars: Record<number, AvatarSource> = {
        0: require("../../assets/avatars/0.png"),
        1: require("../../assets/avatars/1.png"),
        2: require("../../assets/avatars/2.png"),
        3: require("../../assets/avatars/3.png"),
        4: require("../../assets/avatars/4.png"),
        5: require("../../assets/avatars/5.png"),
        6: require("../../assets/avatars/6.png"),
        7: require("../../assets/avatars/7.png"),
        8: require("../../assets/avatars/8.png"),
        9: require("../../assets/avatars/9.png"),
        10: require("../../assets/avatars/10.png"),
        11: require("../../assets/avatars/11.png"),
        12: require("../../assets/avatars/12.png"),
    }

    return(
        <Image style={[styles.image, {height: size, width: size}]} source={avatars[id]} />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 100,
    },
})