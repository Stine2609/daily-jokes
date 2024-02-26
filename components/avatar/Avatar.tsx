import { View, Image, StyleSheet, StyleProp, ImageStyle } from "react-native";

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

interface AvatarProps {
    id: number;
    size?: number;
}

export default function Avatar(props: AvatarProps) {
    const { id, size = 48 } = props;

    return(
        <Image style={[avatarStyles.image, {height: size, width: size}]} source={avatars[id]} />
    )
}

const avatarStyles = StyleSheet.create({
    image: {
        borderRadius: 100,
    },
})


interface ProfilePictureProps {
    id: number;
    backgroundColor?: string;
    size?: number;
    borderWidth?: number;
    /** 
    * @property Determines how far the avatar should be offset
    * positive values for right, negative for left
    * should be kept low as going too far looks bad
    */
    offset?: number;
}

export function ProfilePicture(props:ProfilePictureProps) {
    const { id, backgroundColor = "#FDBC66", size = 120, borderWidth = 2, offset = 0 } = props;
    return(
        <View style={[
            profileStyles.fullCircle,
            {
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                height: size - 10,
                width: size - 10
            }
        ]}>
            <View style={[
                profileStyles.lowerCircle,
                {
                    height: size + 20, // Allows room for image overflow without cutoff
                    width: size - borderWidth * 2
                }
            ]}>
                <Image style={[
                    profileStyles.image,
                    {
                        height: size,
                        width: size,
                        left: offset
                    }
                ]} source={avatars[id]} />
            </View>
        </View>
    )
}

const profileStyles = StyleSheet.create({
    fullCircle: {
        borderRadius: 100,
        justifyContent: "flex-end",
        alignItems: "center",
        borderColor: "white",
    },

    lowerCircle: {
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        overflow: "hidden",
    },

    image: {
        position: "absolute",
        bottom: 0,
    }
})