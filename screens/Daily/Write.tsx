import { View, StyleSheet } from "react-native";
import ContentBox from "../../components/ContentBox";
import Text from "../../components/Text";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/buttons/SumbitButton";

export default function Write() {
    return(
        <View style={styles.container}>
            <ContentBox title="Punny Jokes">
                <InputField placeholder="Write your joke here..." />
                <View style={{alignItems: "center"}}>
                    <SubmitButton label="Sumbit" />
                </View>
            </ContentBox>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})