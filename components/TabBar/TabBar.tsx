import { View, StyleSheet } from "react-native"
import TabButton from "./TabButton"
import colors from "../Colors"
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
                background={colors.tabBar.home.background}
                highlight={colors.tabBar.home.highlight}
            />
            <TabButton
                label="Daily"
                icon="daily"
                background={colors.tabBar.daily.background}
                highlight={colors.tabBar.daily.highlight}
            />
            <TabButton
                label="Browse"
                icon="browse"
                background={colors.tabBar.browse.background}
                highlight={colors.tabBar.browse.highlight}
            />
            <TabButton
                label="Profile"
                icon="profile"
                background={colors.tabBar.profile.background}
                highlight={colors.tabBar.profile.highlight}
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
        // backgroundColor: colors.tabBar.background,
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})