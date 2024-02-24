import { StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Avatar from "../avatar/Avatar";

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
            useDefaultCenter
            centerTitle={joke.username}
            centerText={joke.text}
            useDefaultRight
            rightText={"#" + joke.position}
        />
    )
}