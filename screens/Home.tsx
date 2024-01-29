import { StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import PlayButton from "../components/buttons/PlayButton";
import ContentBox from "../components/ContentBox";

interface HomeProps {
    navigation: {
        navigate: (name: string) => void;
    };
}

export default function Home({ navigation }: HomeProps) {

    return(
        <ScreenView style={styles.container}>
            <ContentBox title="Daily contest" text='"The theme for today is punny jokes!"'/>
            <PlayButton onPress={() => navigation.navigate("Daily")} label="Play" />
        </ScreenView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        gap: 100,
    }
})