import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import Button from "../components/buttons/Button";
import ContentBox, { ContentBoxBottom } from "../components/ContentBox";
import PlayersDisplay from "../components/avatar/PlayersDisplay";
import { useContest } from "../hooks/useContest";
import { colors } from "../components/Colors";
import Text from "../components/Text";

interface HomeProps {
    navigation: {
        navigate: (name: string) => void;
    };
}

function getTimeLeft(contestDate: string): string {
    const contestEndDate = new Date(contestDate);
    contestEndDate.setUTCDate(contestEndDate.getUTCDate() + 1);

    const now = new Date();
    const timeLeft = contestEndDate.getTime() - now.getTime(); 

    if (timeLeft < 0) {
        return "Contest has ended";
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}:${minutes} hours left`;
}

export default function Home({ navigation }: HomeProps) {

    const contest = useContest();
    const [timeLeft, setTimeLeft] = useState('Calculating time left...');

    useEffect(() => {
        const updateTimeLeft = () => {
            setTimeLeft(getTimeLeft(contest.date));
        };

        updateTimeLeft(); // Initial update
        const intervalId = setInterval(updateTimeLeft, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [contest.date]);

    return(
        <ScreenView style={styles.container}>
            <ContentBox
                title="Daily contest"
                headerColor={colors.purple.dark}
                text={`"The theme for today is ${contest.topic}!"`}
                isLoading={contest.topic == ""}
            >
                <PlayersDisplay users={[
                    {"id": 1, "avatarId": 5},
                    {"id": 2, "avatarId": 3},
                    {"id": 3, "avatarId": 0},
                    {"id": 4, "avatarId": 2},
                    {"id": 5, "avatarId": 12},
                    {"id": 6, "avatarId": 11},
                    {"id": 7, "avatarId": 1}
                ]} />
                <ContentBoxBottom>
                    <Button variant="play" onPress={() => navigation.navigate("Daily")} label="Play" />
                    <Text color={colors.purple.dark}>{timeLeft}</Text>
                </ContentBoxBottom>
            </ContentBox>
        </ScreenView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 100,
    }
})