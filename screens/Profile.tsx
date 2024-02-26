import ScreenView from "../components/ScreenView";
import RibbonTitle from "../components/RibbonTitle";
import { ProfilePicture } from "../components/avatar/Avatar";

export default function Profile() {
    return(
        <ScreenView>
            <ProfilePicture id={6} />
            {/* <RibbonTitle topText="Top" bottomText="Results" /> */}
        </ScreenView>
    )
}