import { useRef } from "react";
import { View } from "react-native";
import HeaderCenter from "./HeaderCenter";
import CircularButton from "../buttons/CircularButton";
import Drawer from "../drawer/Drawer";
import CoinCount from "../misc/CoinCount";
import DrawerLink from "../drawer/DrawerLink";
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackParamsList } from "../../screens/AppNavigationStack";

type HeaderOptionsProps = {
  navigation: NavigationProp<StackParamsList>;
  route: RouteProp<StackParamsList, keyof StackParamsList>;
};

type DrawerRef = {
    openDrawer: () => void;
    closeDrawer: () => void;
};

const HeaderOptions = ({ navigation, route }: HeaderOptionsProps) => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0, // for Android
      shadowOpacity: 0, // for iOS
    },
    headerTitle: () => (
        <HeaderCenter label={route.name}/>
    ),
    headerTitleAlign: "center" as const, // Explicitly typing as "center"
    headerLeft: (props: any) => {
        const { onPress } = props;  // Extract default onPress
        const navigationDrawerRef = useRef<DrawerRef>(null);
        return(
            <View style={{marginLeft: 20}}>
                {route.name == "Home" ? (
                    <>
                        <CircularButton variant="hamburger" onPress={() => navigationDrawerRef.current?.openDrawer()} />
                        <Drawer
                            ref={navigationDrawerRef}
                            containerStyle={[]}
                            side="left"
                        >
                            <DrawerLink text="Notifications" linkTo="Notifications" onPress={() => navigationDrawerRef.current?.closeDrawer()} />
                        </Drawer>
                    </>
                ) : (
                    <CircularButton variant="back" onPress={onPress} />
                )}
            </View>
        )
    },
    headerRight: () => (
        <View style={{marginRight: 20}}>
            <CoinCount />
        </View>
    ),
})

export default HeaderOptions