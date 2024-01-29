import Text from "../components/Text";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../components/header/HeaderOptions";
import Home from "./Home";
import Daily from "./Daily/Daily";

const Stack = createStackNavigator();

export default function AppNavigationStack() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
				name="Home"
				component={Home}
				options={HeaderOptions}
			/>
            <Stack.Screen
				name="Daily"
				component={Daily}
				options={HeaderOptions}
			/>
        </Stack.Navigator>
    )
}