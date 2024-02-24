import { StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Text from "../Text";
import { colors } from "../Colors";
import SquareButton from "../buttons/SquareButton";

interface ContestListItemProps {
    contest: {
        date: string;
        name: string;
        winner: string;
    }
}

export default function ContestListItem(props: ContestListItemProps) {
    const { contest } = props;
    return(
        <ListItem 
            left={
                <SquareButton width={50} height={50} borderRadius={10} borderWidth={0} highlightColor={colors.purple.highlight} backgroundColor={colors.purple.dark}>
                    <Text shadow={false} size={21} style={{textAlign: "center", lineHeight: 18}}>{contest.date}</Text>
                </SquareButton>
            }
            useDefaultCenter
            centerTitle={contest.name}
            centerText={`#1 ${contest.winner}`}
            useDefaultRight
        />
    )
}

const styles = StyleSheet.create({
    centerContainer: {

    }
})