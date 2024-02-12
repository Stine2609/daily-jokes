import ScreenView from "../../components/ScreenView";
import StylizedTitle from "../../components/StylizedTitle";
import Write from "./Write";
import Rate from "./Rate";
import MyJokes from "./MyJokes";
import { View } from "react-native";
import ContentTab from "../../components/ContentTab";
import MascotTip from "../../components/MascotTip";

export default function Daily() {

    return (
        <ScreenView style={{justifyContent: "flex-start"}}>
            <StylizedTitle />
            <MascotTip />
            <ContentTab 
                tabs={[
                    {
                        name: "Write",
                        component: <Write />
                    },
                    {
                        name: "Rate",
                        component: <Rate />
                    },
                    {
                        name: "My Jokes",
                        component: <MyJokes />
                    },
                ]}
            />
        </ScreenView>
    )
}