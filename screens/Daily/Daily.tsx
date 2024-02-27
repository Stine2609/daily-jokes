import ScreenView from "../../components/layout/ScreenView";
import StylizedTitle from "../../components/misc/StylizedTitle";
import Write from "./Write";
import Rate from "./Rate";
import MyJokes from "./MyJokes";
import ContentTab from "../../components/layout/ContentTab";

export default function Daily() {

    return (
        <ScreenView style={{ justifyContent: "flex-start" }}>
            <StylizedTitle />
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