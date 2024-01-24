import { Text, View } from "react-native";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import ScreenView from "../components/ScreenView";

export default function Home() {
    return(
        <ScreenView>
            <Button1 label="WRITE" />
            <Button2 label="PLAY" />
        </ScreenView>
    )
}