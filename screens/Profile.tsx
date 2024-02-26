import ScreenView from "../components/ScreenView";
import RibbonTitle from "../components/RibbonTitle";
import { ProfilePicture } from "../components/avatar/Avatar";
import ContentBox from "../components/ContentBox";

export default function Profile() {
    return(
        <ScreenView>
            <ProfilePicture id={6} />
            <ContentBox ribbonTitle flavorText="Top" title="Results" />
            {/* <RibbonTitle topText="Top" bottomText="Results" /> */}
        </ScreenView>
    )
}