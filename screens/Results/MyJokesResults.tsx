import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from "../../components/managers/ContestListManager";
import { useContest } from "../../hooks/useContest";

export default function MyJokesResults() {
    const contest = useContest();
    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <JokeListManager initialCriteria={{ exclude: { contestId: { not: contest.id } }, sortBy: "score" }}/>
            </ScrollToTopView>
        </View>
    )
}