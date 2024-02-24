import { View } from 'react-native';
import SearchBar from "../../components/SearchBar";
import FilterToggle from "../../components/FilterToggle";
import ContentBox from "../../components/ContentBox";
import JokeListItem from "../../components/listItem/JokeListItem";
import ScrollToTopView from '../../components/ScrollToTopView';

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
                    <JokeListItem joke={{
                        avatarId: 1,
                        username: "Username",
                        text: "This is a really funny joke! The funnies joke ever.",
                        position: 2
                    }} />
                    <JokeListItem joke={{
                        avatarId: 1,
                        username: "Username",
                        text: "This is a really funny joke! The funnies joke ever.",
                        position: 2
                    }} />
                    <JokeListItem joke={{
                        avatarId: 1,
                        username: "Username",
                        text: "This is a really funny joke! The funnies joke ever.",
                        position: 2
                    }} />
                    <JokeListItem joke={{
                        avatarId: 1,
                        username: "Username",
                        text: "This is a really funny joke! The funnies joke ever.",
                        position: 2
                    }} />
                    <JokeListItem joke={{
                        avatarId: 1,
                        username: "Username",
                        text: "This is a really funny joke! The funnies joke ever.",
                        position: 2
                    }} />
                </ContentBox>
            </ScrollToTopView>
        </View>
    )
}