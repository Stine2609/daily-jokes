import { useState, useEffect } from "react";
import Text from "../components/generalUI/Text";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../components/header/HeaderOptions";
import Home from "./Home";
import Daily from "./Daily/Daily";
import Browse from "./Browse/Browse";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Results from "../components/misc/Results";
import ContestResultChecker from "../components/misc/ContestResultChecker";

const Stack = createStackNavigator();

export default function AppNavigationStack() {

    return (
        <ContestResultChecker>
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
                <Stack.Screen
                    name="Notifications"
                    component={Notifications}
                    options={({ navigation, route }) => HeaderOptions({ navigation, route })}
                />
            </Stack.Navigator>
        </ContestResultChecker>
    )
}