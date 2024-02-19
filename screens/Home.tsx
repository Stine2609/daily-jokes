import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import Button from "../components/buttons/Button";
import ContentBox from "../components/ContentBox";
import PlayersDisplay from "../components/avatar/PlayersDisplay";
import { useContest } from "../hooks/useContest";

interface HomeProps {
    navigation: {
        navigate: (name: string) => void;
    };
}

export default function Home({ navigation }: HomeProps) {

    const topic = useContest().topic;

    return(
        <ScreenView style={styles.container}>
            <ContentBox
                title="Daily contest"
                text={`"The theme for today is ${topic}!"`}
                isLoading={topic == ""}
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
                <Button variant="play" onPress={() => navigation.navigate("Daily")} label="Play" />
            </ContentBox>
        </ScreenView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 100,
    }
})