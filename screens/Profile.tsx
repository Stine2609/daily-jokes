import ScreenView from "../components/ScreenView";
import RibbonTitle from "../components/RibbonTitle";
import { ProfilePicture } from "../components/profile/Avatar";
import ContentBox from "../components/ContentBox";
import ContestListItem from "../components/listItem/ContestListItem";

export default function Profile() {
    return(
        <ScreenView>
            <ProfilePicture id={6} />
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
        </ScreenView>
    )
}