import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Avatar from "../avatar/Avatar";
import Text from "../Text";
import { componentColors } from "../Colors";

interface JokeListItemProps {
    joke: {
        avatarId: number;
        username: string;
        text: string;
        position: number;
    }
}

export default function JokeListItem(props: JokeListItemProps) {
    const { joke } = props;
    return(
        <ListItem 
            left={<Avatar id={joke.avatarId} />}
            center={
                <View style={styles.centerContainer}>
                    <Text shadow={false} color={componentColors.text.black}>{joke.username}</Text>
                    <Text shadow={false} numberOfLines={2} size={15} style={{letterSpacing: 0.5}} color={componentColors.text.dark}>{joke.text}</Text>
                </View>
            }
            useDefaultRight
            rightText={"#" + joke.position}
        />
    )
}

const styles = StyleSheet.create({
    centerContainer: {

    }
})