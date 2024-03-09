import { useState } from "react";
import Text from "../components/generalUI/Text";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../components/header/HeaderOptions";
import Home from "./Home";
import Daily from "./Daily/Daily";
import Browse from "./Browse/Browse";
import Profile from "./Profile";
import Results from "../components/misc/Results";

const Stack = createStackNavigator();

export default function AppNavigationStack() {

    const [resultsVisible, setResultsVisible] = useState(false);

    return(
        <>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => HeaderOptions({ navigation, route })}
            />
            <Stack.Screen
                name="Daily"
                component={Daily}
                options={({ navigation, route }) => HeaderOptions({ navigation, route })}
            />
            <Stack.Screen
                name="Browse"
                component={Browse}
                options={({ navigation, route }) => HeaderOptions({ navigation, route })}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={({ navigation, route }) => HeaderOptions({ navigation, route })}
            />
        </Stack.Navigator>
        {/* TODO: Implement functionality for results modal */}
        <Results
            visible={resultsVisible}
            onRequestClose={() => setResultsVisible(false)}
            results={{
                date: "Date",
                theme: "Theme",
                rank: "#Rank",
                reward: 0,
            }}
        />
        </>
    )
}