import ScreenView from "../components/layout/ScreenView";
import CircularButton from "../components/buttons/CircularButton";

export default function Notifications() {
    return(
        <ScreenView>
            <CircularButton variant="back" />
            <CircularButton variant="yes" />
            <CircularButton variant="no" />
            <CircularButton variant="superlike" />
            <CircularButton variant="close" />
            <CircularButton variant="hamburger" />
        </ScreenView>
    )
}