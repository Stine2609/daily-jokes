import ScreenView from "../../components/ScreenView";
import Jokes from "./Jokes";
import Contests from "./Contests";
import ContentTab from "../../components/ContentTab";

export default function Browse() {

    return (
        <ScreenView style={{justifyContent: "flex-start"}}>
            <ContentTab 
                tabs={[
                    {
                        name: "Jokes",
                        component: <Jokes />
                    },
                    {
                        name: "Contests",
                        component: <Contests />
                    },
                ]}
            />
        </ScreenView>
    )
}