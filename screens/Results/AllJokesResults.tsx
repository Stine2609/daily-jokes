import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from "../../components/managers/JokeListManager";
import { useContest } from "../../hooks/useContest";
import { useContestSearch } from "../../hooks/useContestSearch";

export default function AllJokesResults({ contestId }: { contestId: Date }) {
    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <JokeListManager initialCriteria={{ filters: { contestId: contestId }, sortBy: "-createTimeStamp"}}/>
            </ScrollToTopView>
        </View>
    )
}