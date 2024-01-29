import { View, StyleSheet } from "react-native";
import ContentBox from "../../components/ContentBox";

export default function Write() {
    return(
        <View style={styles.container}>
            <ContentBox title="Punny Jokes"/>
            <ContentBox title="Punny Jokes"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})