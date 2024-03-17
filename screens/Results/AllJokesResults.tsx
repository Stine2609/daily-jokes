import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from "../../components/managers/JokeListManager";
import { useContest } from "../../hooks/useContest";

export default function AllJokesResults({ date }: { date: Date }) {
    const contest = useContest(date);
    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <JokeListManager initialCriteria={{ filters: { contestId: contest.id }, sortBy: "-createTimeStamp"}}/>
            </ScrollToTopView>
        </View>
    )
}