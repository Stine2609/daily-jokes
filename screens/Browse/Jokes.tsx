import { View } from 'react-native';
import SearchBar from "../../components/SearchBar";
import FilterToggle from "../../components/FilterToggle";
import ContentBox from "../../components/ContentBox";
import ScrollToTopView from '../../components/ScrollToTopView';
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
                    <JokeListManager criteria={{}}></JokeListManager>
                </ContentBox>
            </ScrollToTopView>
        </View>
    )
}