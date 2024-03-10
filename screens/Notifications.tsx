import ScreenView from "../components/layout/ScreenView";
import CircularButton from "../components/buttons/CircularButton";
import MascotTip from "../components/misc/MascotTip";
import { useState } from "react";

export default function Notifications() {
    const [showMascot, setShowMascot] = useState(true);

    return(
        <ScreenView>
            <CircularButton onPress={() => setShowMascot(true)} variant="back" />
            <CircularButton variant="yes" />
            <CircularButton variant="no" />
            <CircularButton variant="superlike" />
            <CircularButton variant="close" />
            <CircularButton variant="hamburger" />
            <MascotTip visible={showMascot} onClose={() => setShowMascot(false)} />
        </ScreenView>
    )
}