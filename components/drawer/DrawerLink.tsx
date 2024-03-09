import { StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../generalUI/Text";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

interface DrawerLinkProps {
    text?: string;
    icon?: string;
    linkTo: string;
}

export default function DrawerLink(props: DrawerLinkProps) {
    const { text, icon, linkTo } = props;

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return(
        <TouchableOpacity onPress={() => navigation.navigate(linkTo)} style={styles.container}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
})