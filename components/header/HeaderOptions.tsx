import { useRef } from "react";
import { View } from "react-native";
import HeaderCenter from "./HeaderCenter";
import CircularButton from "../buttons/CircularButton";
import Drawer from "../drawer/Drawer";
import CoinCount from "../misc/CoinCount";

type DrawerRef = {
    openDrawer: () => void;
};

const HeaderOptions = ({  }) => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0, // for Android
      shadowOpacity: 0, // for iOS
    },
    headerTitle: () => (
        <HeaderCenter label={"Daily"}/>
    ),
    headerTitleAlign: "center" as const, // Explicitly typing as "center"
    headerLeft: (props: any) => {
        const { onPress } = props;  // Extract default onPress
        
        const navigationDrawerRef = useRef<DrawerRef>(null);

        return(
            <View style={{marginLeft: 20}}>
                {onPress == undefined ? (
                    <>
                        <CircularButton variant="hamburger" onPress={() => navigationDrawerRef.current?.openDrawer()} />
                        <Drawer
                            ref={navigationDrawerRef}
                            containerStyle={[]}
                            side="left"
                        >
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