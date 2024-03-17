import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from "../../components/managers/JokeListManager";
import { useContest } from "../../hooks/useContest";
import { useProfile } from "../../hooks/useProfile";
import { useContestSearch } from "../../hooks/useContestSearch";

export default function MyJokesResults({ contestId }: { contestId: Date }) {
    const profile = useProfile();

    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <JokeListManager initialCriteria={{ filters: { contestId: contestId, userId: profile?.user?.id }, sortBy: "-createTimeStamp"}}/>
            </ScrollToTopView>
        </View>
    )
}