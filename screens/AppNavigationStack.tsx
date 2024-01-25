import Text from "../components/Text";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import HeaderOptions from "../components/header/HeaderOptions";

const Stack = createStackNavigator();

export default function AppNavigationStack() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
				name="Home"
				component={Home}
				options={HeaderOptions}
			/>
        </Stack.Navigator>
    )
}