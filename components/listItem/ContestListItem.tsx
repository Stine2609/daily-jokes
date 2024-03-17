import { StyleSheet } from "react-native";
import ListItem from "./ListItem";
import Text from "../generalUI/Text";
import { colors } from "../misc/Colors";
import SquareButton from "../buttons/SquareButton";
import { formatTimestampToShortDate } from "../../utils/date";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

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
        id: number;
    }
    noBox?: boolean;
}


export default function ContestListItem(props: ContestListItemProps) {
    const { contest, noBox } = props;

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return(
        <ListItem 
            left={
                <SquareButton width={56} height={56} borderRadius={10} borderWidth={0} highlightColor={colors.purple.highlight} backgroundColor={colors.purple.dark}>
                    <Text shadow={false} size={21} style={{textAlign: "center", lineHeight: 18}}>{formatTimestampToShortDate(contest.date)}</Text>
                </SquareButton>
            }
            useDefaultCenter
            centerTitle={contest.name}
            centerText={contest.winner ? `#1 ${contest.winner}` : null}
            stats={contest.stats}
            useDefaultRight
            rightText={contest.position ? "#" + contest.position : null}
            noBox={noBox}
            onPress={() => {
                navigation.navigate("Results", { contestId: contest.id });
            }}
        />
    )
}

const styles = StyleSheet.create({
    centerContainer: {

    }
})