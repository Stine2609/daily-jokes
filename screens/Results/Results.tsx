import React from 'react';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import ScreenView from "../../components/layout/ScreenView";
import ContentTab from "../../components/layout/ContentTab";
import AllJokesResults from "./AllJokesResults";
import MyJokesResults from "./MyJokesResults";

export default function Results() {
    const route = useRoute();
    const date = route.params?.date ? new Date(route.params.date) : new Date();

    return(
        <ScreenView>
            <ContentTab
                tabs={[
                    {
                        name: "All Jokes",
                        component: <AllJokesResults date={date} />,
                    },
                    {
                        name: "My Jokes",
                        component: <MyJokesResults date={date} />,
                    },
                ]}
            />
        </ScreenView>
    );
}
