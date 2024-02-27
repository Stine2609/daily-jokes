import { View } from "react-native";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import SearchBar from "../../components/generalUI/SearchBar";
import ContentBox from "../../components/layout/ContentBox";
import ContestListItem from "../../components/listItem/ContestListItem";

export default function Contests() {
    return(
        <View>
            <ScrollToTopView>
                <SearchBar placeholder="Search..." />
                <ContentBox>
                    <ContestListItem contest={{
                        date: "Feb. 25",
                        name: "Funny Jokes",
                        winner: "Crazy Asgeir"
                    }}/>
                    <ContestListItem contest={{
                        date: "Jun. 1",
                        name: "Funny Jokes",
                        winner: "Crazy Asgeir"
                    }}/>
                    <ContestListItem contest={{
                        date: "Sep. 1",
                        name: "Funny Jokes",
                        winner: "Crazy Asgeir"
                    }}/>
                    <ContestListItem contest={{
                        date: "May 17",
                        name: "Funny Jokes",
                        winner: "Crazy Asgeir"
                    }}/>
                </ContentBox>
            </ScrollToTopView>
        </View>
    )
}