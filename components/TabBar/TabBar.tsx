import { View, StyleSheet } from "react-native"
import TabButton from "./TabButton"
import { componentColors } from "../Colors"
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native"

interface TabBarProps {
    height?: number;
}

export default function TabBar(props:TabBarProps) {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const { height = 100 } = props;
    return(
        <View style={[styles.container, {height: height}]}>
            <TabButton
                onPress={() => navigation.navigate("Home")}
                label="Home"
                icon="home"
                background={componentColors.tabBar.home.background}
                highlight={componentColors.tabBar.home.highlight}
            />
            <TabButton
                onPress={() => navigation.navigate("Daily")}
                label="Daily"
                icon="daily"
                background={componentColors.tabBar.daily.background}
                highlight={componentColors.tabBar.daily.highlight}
            />
            <TabButton
                onPress={() => navigation.navigate("Browse")}
                label="Browse"
                icon="browse"
                background={componentColors.tabBar.browse.background}
                highlight={componentColors.tabBar.browse.highlight}
            />
            <TabButton
                onPress={() => navigation.navigate("Profile")}
                label="Profile"
                icon="profile"
                background={componentColors.tabBar.profile.background}
                highlight={componentColors.tabBar.profile.highlight}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        flexDirection: "row",
        gap: 20,
        // backgroundColor: componentColors.tabBar.background,
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})