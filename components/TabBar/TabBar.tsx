import { View, StyleSheet } from "react-native"
import TabButton from "./TabButton"
import colors from "../Colors"

export default function TabBar() {
    return(
        <View style={styles.container}>
            <TabButton
                label="Home"
                background={colors.tabBar.home.background}
                highlight={colors.tabBar.home.highlight}
            />
            <TabButton
                label="Daily"
                background={colors.tabBar.daily.background}
                highlight={colors.tabBar.daily.highlight}
            />
            <TabButton
                label="Browse jokes"
                background={colors.tabBar.browse.background}
                highlight={colors.tabBar.browse.highlight}
            />
            <TabButton
                label="Profile"
                background={colors.tabBar.profile.background}
                highlight={colors.tabBar.profile.highlight}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        gap: 20,
        backgroundColor: colors.tabBar.background,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})