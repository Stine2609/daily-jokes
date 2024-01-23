import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";

const Stack = createStackNavigator();

export default function AppNavigationStack() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
				name="Home"
				component={Home}
				options={({ route }) => ({
					headerTitle: () => (
                        <Text>Home screen</Text>
					),
					headerTitleAlign: "center",
					// headerStyle: standardHeaderStyle,
					headerLeft: () => (
						<>
						</>
					),
					headerRight: () => (
						<>
						</>
					),
				})}
			/>
        </Stack.Navigator>
    )
}