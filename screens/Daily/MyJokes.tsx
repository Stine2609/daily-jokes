import { View } from "react-native";
import JokeListItem from "../../components/listItem/JokeListItem";
import ContentBox from "../../components/ContentBox";
import { colors } from "../../components/Colors";

export default function MyJokes() {
    return(
        <View>
            <ContentBox headerColor={colors.purple.medium}>
                <JokeListItem joke={{
                    avatarId: 1,
                    username: "Username",
                    text: "This is a really funny joke! The funnies joke ever.",
                    position: 2
                }} />
            </ContentBox>
        </View>
    )
}