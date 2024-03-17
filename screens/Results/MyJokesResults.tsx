import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from "../../components/managers/JokeListManager";
import { useContest } from "../../hooks/useContest";
import { useProfile } from "../../hooks/useProfile";

export default function MyJokesResults({ date }: { date: Date }) {
    const contest = useContest(date);
    const profile = useProfile();

    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <JokeListManager initialCriteria={{ filters: { contestId: contest.id, userId: profile?.user?.id }, sortBy: "-createTimeStamp"}}/>
            </ScrollToTopView>
        </View>
    )
}