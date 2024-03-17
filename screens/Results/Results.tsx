import React from 'react';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import ScreenView from "../../components/layout/ScreenView";
import ContentTab from "../../components/layout/ContentTab";
import AllJokesResults from "./AllJokesResults";
import MyJokesResults from "./MyJokesResults";

export default function Results() {
    const route = useRoute();
    const contestId = route.params?.contestId ? route.params.contestId : 50;

    return(
        <ScreenView>
            <ContentTab
                tabs={[
                    {
                        name: "All Jokes",
                        component: <AllJokesResults contestId={contestId} />,
                    },
                    {
                        name: "My Jokes",
                        component: <MyJokesResults contestId={contestId} />,
                    },
                ]}
            />
        </ScreenView>
    );
}
