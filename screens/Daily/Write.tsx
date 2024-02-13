import { View, StyleSheet } from "react-native";
import ContentBox from "../../components/ContentBox";
import InputField from "../../components/InputField";
import Button from "../../components/buttons/Button";
import MascotTip from "../../components/MascotTip";
import { create } from "../../api/joke";

export default function Write() {

    let submitJoke = async () => {
        return;
        await create({
            userId: 9999,
            textBody: "textbodyhere"
        })
    }

    return(
        <View style={styles.container}>
            <ContentBox>
                <InputField placeholder="Write your joke here..." />
                <View style={{alignItems: "center"}}>
                    <Button variant="submit" onPress={submitJoke}  label="Sumbit" />
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