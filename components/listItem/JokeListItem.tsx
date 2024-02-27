import { StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Avatar from "../profile/Avatar";

interface JokeListItemProps {
    joke: {
        avatarId: number;
        username: string;
        text: string;
        position: number;
        stats?: {
            likes?: number;
        }
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
            stats={joke.stats}
            useDefaultRight
            rightText={"#" + joke.position}
        />
    )
}