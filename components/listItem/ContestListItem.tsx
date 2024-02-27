import { StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Text from "../generalUI/Text";
import { colors } from "../misc/Colors";
import SquareButton from "../buttons/SquareButton";

interface ContestListItemProps {
    contest: {
        date: string;
        name: string;
        winner?: string;
        position?: number;
        stats?: {
            likes?: number;
            participants?: number;
        }
    }
}

export default function ContestListItem(props: ContestListItemProps) {
    const { contest } = props;
    return(
        <ListItem 
            left={
                <SquareButton width={56} height={56} borderRadius={10} borderWidth={0} highlightColor={colors.purple.highlight} backgroundColor={colors.purple.dark}>
                    <Text shadow={false} size={21} style={{textAlign: "center", lineHeight: 18}}>{contest.date}</Text>
                </SquareButton>
            }
            useDefaultCenter
            centerTitle={contest.name}
            centerText={contest.winner ? `#1 ${contest.winner}` : null}
            stats={contest.stats}
            useDefaultRight
            rightText={contest.position ? "#" + contest.position : null}
        />
    )
}

const styles = StyleSheet.create({
    centerContainer: {

    }
})