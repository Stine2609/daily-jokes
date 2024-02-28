import { View } from 'react-native';
import SearchBar from "../../components/generalUI/SearchBar";
import FilterToggle from "../../components/generalUI/FilterToggle";
import ContentBox from "../../components/layout/ContentBox";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from '../../components/managers/JokeListManager';

export default function Jokes() {
    return(
        <View style={{flex: 1}}>
            <ScrollToTopView>
                <SearchBar placeholder="Search..." />
                <FilterToggle
                    options={[
                        {
                            label: "top",
                        },
                        {
                            label: "recent",
                        }
                    ]}
                />
                <ContentBox>
                    <JokeListManager criteria={{ sortBy: "-createTimeStamp" }}></JokeListManager>
                </ContentBox>
            </ScrollToTopView>
        </View>
    )
}