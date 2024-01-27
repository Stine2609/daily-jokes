import { Text, View } from "react-native";
import ScreenView from "../components/ScreenView";
import ToggleButton from "../components/ToggleButton";
import PlayButton from "../components/PlayButton";
import ContentBox from "../components/ContentBox";
import TabBar from "../components/TabBar/TabBar";

export default function Home() {
    return(
        <ScreenView>
            <ToggleButton label="Write" />
            <PlayButton label="Play" />
            <ContentBox title="Daily contest" text="Hey"/>
            <TabBar />
        </ScreenView>
    )
}