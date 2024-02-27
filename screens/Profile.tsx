import { View, StyleSheet } from "react-native";
import ScreenView, { HEADER_HEIGHT, SCREEN_HEIGHT } from "../components/layout/ScreenView";
import Text from "../components/generalUI/Text";
import { ProfilePicture } from "../components/profile/Avatar";
import ContentBox from "../components/layout/ContentBox";
import ContestListItem from "../components/listItem/ContestListItem";
import ProfileBackground from "../components/profile/ProfileBackground";
import ScrollToTopView from "../components/layout/ScrollToTopView";

export default function Profile() {
    return(
        <ScreenView style={{
            marginTop: 0,
            // For this screen, the content is allowed to go behind the top bar
            maxHeight: HEADER_HEIGHT + SCREEN_HEIGHT
        }}>
            <ScrollToTopView scrollToTopThreshold={500}>
                <ProfileBackground imageId={0} />
                <View style={styles.profilePictureContainer}>
                    <View style={styles.profilePictureInner}>
                        <ProfilePicture id={6} />
                        <Text size={20}>Crazy Askeir</Text>
                    </View>
                </View>
                <ContentBox ribbonTitle flavorText="Top" title="Results">
                    <ContestListItem contest={{
                        date: "Feb. 26",
                        name: "Puns!",
                        position: 5,
                        stats: {
                            likes: 234,
                            participants: 32,
                        }
                    }}/>
                </ContentBox>
            </ScrollToTopView>
        </ScreenView>
    )
}

const styles = StyleSheet.create({
    profilePictureContainer: {
        height: 75,
        width: "80%",
        alignSelf: "center"
    },

    profilePictureInner: {
        bottom: "50%",
        position: "absolute",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
})