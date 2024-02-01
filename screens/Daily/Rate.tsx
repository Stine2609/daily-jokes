import { View } from "react-native";
import ContentBox from "../../components/ContentBox";
import NoButton from "../../components/buttons/NoButton";
import YesButton from "../../components/buttons/YesButton";

export default function Rate() {
    return(
        <View>
            <ContentBox title="Punny jokes">
                <NoButton />
                <YesButton />
            </ContentBox>
        </View>
    )
}