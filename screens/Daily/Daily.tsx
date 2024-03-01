import { StyleSheet } from "react-native";
import ScreenView from "../../components/layout/ScreenView";
import StylizedTitle from "../../components/misc/StylizedTitle";
import Write from "./Write";
import Rate from "./Rate";
import MyJokes from "./MyJokes";
import ContentTab from "../../components/layout/ContentTab";

export default function Daily() {

    return (
        <ScreenView style={[styles.container, { justifyContent: "flex-start" }]}>
            {/* <StylizedTitle /> */}
            <ContentTab contentSpacing={0}
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

const styles = StyleSheet.create({
    container: {
        // gap: 20,
        // paddingTop: 20,
        justifyContent: "flex-start",
    }
})