import { View, StyleSheet } from "react-native";
import ContentBox from "../../components/ContentBox";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/buttons/SumbitButton";
import MascotTip from "../../components/MascotTip";

export default function Write() {
    return(
        <View style={styles.container}>
            <ContentBox title="Punny Jokes">
                <InputField placeholder="Write your joke here..." />
                <View style={{alignItems: "center"}}>
                    <SubmitButton label="Sumbit" />
                </View>
            </ContentBox>
            <MascotTip />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})