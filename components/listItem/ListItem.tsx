import { ReactNode } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Text from "../Text";
import { componentColors } from "../Colors";

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


interface CenterComponentProps {
    title?: string;
    text?: string;
}

function CenterComponent(props: CenterComponentProps) {
    const { title, text } = props;
    return(
        <View style={centerStyles.centerContainer}>
            <Text shadow={false} color={componentColors.text.black}>{title}</Text>
            <Text shadow={false} numberOfLines={2} size={15} style={{letterSpacing: 0.5}} color={componentColors.text.dark}>{text}</Text>
        </View>
    )
}

const centerStyles = StyleSheet.create({
    centerContainer: {

    }
})


interface ListItemProps {
    left?: ReactNode;
    center?: ReactNode;
    useDefaultCenter?: boolean;
    centerTitle?: string;
    centerText?: string;
    right?: ReactNode;
    useDefaultRight?: boolean;
    rightText?: string | null;
}

export default function ListItem(props: ListItemProps) {
    const { left, center, useDefaultCenter, centerTitle, centerText, right, useDefaultRight, rightText = ""} = props;
    return(
        <TouchableOpacity style={listItemStyles.container}>
            <View style={listItemStyles.left}>
                {left}
            </View>
            <View style={listItemStyles.center}>
                {useDefaultCenter ? (
                    <CenterComponent title={centerTitle} text={centerText} />
                ) : (
                    <>
                        {center}
                    </>
                )}
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
        gap: 10,
        marginVertical: 4,
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