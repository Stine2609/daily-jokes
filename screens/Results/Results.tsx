import ScreenView from "../../components/layout/ScreenView";
import ContentTab from "../../components/layout/ContentTab";
import AllJokesResults from "./AllJokesResults";
import MyJokesResults from "./MyJokesResults";

export default function Results() {
    return(
        <ScreenView>
            <ContentTab
                tabs={[
                    {
                        name: "All Jokes",
                        component: <AllJokesResults />
                    },
                    {
                        name: "My Jokes",
                        component: <MyJokesResults />
                    },
                ]}
            />
        </ScreenView>
    )
}