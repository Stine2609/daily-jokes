import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import Button from "../components/buttons/Button";
import ContentBox, { ContentBoxBottom } from "../components/ContentBox";
import PlayersDisplay from "../components/profile/PlayersDisplay";
import { useContest } from "../hooks/useContest";
import Text from "../components/Text";
import { useTimeLeft } from "../hooks/useTimeLeft";
import { colors } from "../components/Colors";
import PulseAnimation from "../components/PulseAnimation";

interface HomeProps {
    navigation: {
        navigate: (name: string) => void;
    };
}

export default function Home({ navigation }: HomeProps) {

    const contest = useContest();
    const timeLeft = useTimeLeft(contest.date);

    return(
        <ScreenView style={styles.container}>
            <ContentBox
                title="Daily contest"
                headerColor={colors.purple.dark}
                text={
                    <Text shadow={false}>
                        <Text shadow={false} color={colors.purple.medium}>{"The theme for today is \n"}</Text>
                        <PulseAnimation>
                            <Text shadow={false} color={colors.purple.dark}>{contest.topic}</Text>
                        </PulseAnimation>
                    </Text>
                }
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
                    <Button height={36} variant="play" onPress={() => navigation.navigate("Daily")} label="Play" />
                    <Text shadow={false} color={colors.purple.dark}>{timeLeft}</Text>
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