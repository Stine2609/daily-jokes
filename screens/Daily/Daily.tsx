import ScreenView from "../../components/ScreenView";
import StylizedTitle from "../../components/StylizedTitle";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyTabBar from "./DailyTabBar";
import Write from "./Write";
import Rate from "./Rate";
import MyJokes from "./MyJokes";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Daily() {
    const initialTab = "Write";

    return (
        <ScreenView style={{}}>
            <StylizedTitle />
            <View style={{width: "100%", height: "100%"}}>
                <Tab.Navigator
                    initialRouteName={initialTab}
                    tabBar={(props) => <DailyTabBar {...props} />}
                    screenOptions={({ route }) => ({
                        swipeEnabled: true,
                        headerShown: false,
                        
                    })}
                    sceneContainerStyle={{backgroundColor: "transparent"}}
                >
                    <Tab.Screen 
                        name="Write"
                        component={Write}
                    />
                    <Tab.Screen 
                        name="Rate"
                        component={Rate}
                    />
                    <Tab.Screen 
                        name="My Jokes"
                        component={MyJokes}
                    />
                </Tab.Navigator>
            </View>
        </ScreenView>
    )
}