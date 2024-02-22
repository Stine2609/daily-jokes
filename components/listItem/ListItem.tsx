import { ReactNode } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Text from "../Text";

interface RightComponentProps {
    text: string;
}

function RightComponent(props: RightComponentProps) {
    const { text } = props;
    return(
        <View style={rightStyles.container}>
            <Image style={rightStyles.icon} source={require("../../assets/icons/arrow-right.png")} />
            <Text shadow={false} color={"black"}>{text}</Text>
        </View>
    )
}

const rightStyles = StyleSheet.create({
    container: {
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        flex: 1,
    },

    icon: {
        width: 20,
        height: 20,
    }
})


interface ListItemProps {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    useDefaultRight?: boolean;
    rightText?: string | null;
}

export default function ListItem(props: ListItemProps) {
    const { left, center, right, useDefaultRight, rightText = "#?"} = props;
    return(
        <TouchableOpacity style={listItemStyles.container}>
            <View style={listItemStyles.left}>
                {left}
            </View>
            <View style={listItemStyles.center}>
                {center}
            </View>
            <View style={listItemStyles.right}>
                {useDefaultRight ? (
                    <RightComponent text={rightText ? rightText : ""} />
                ) : (
                    <>
                        {right}
                    </>
                )}
            </View>
        </TouchableOpacity>
    )
}

const listItemStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10
    },

    left: {
        flexBasis: 50,
    },

    center: {
        flex: 1,
    },

    right: {
        flexBasis: 26,
    },
})