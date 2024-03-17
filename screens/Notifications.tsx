import ScreenView from "../components/layout/ScreenView";
import NotificationListItem from "../components/listItem/NotificationListItem";
import ContentBox from "../components/layout/ContentBox";
import NotificationListManager from "../components/managers/NotificationListManager";
import ScrollToTopView from "../components/layout/ScrollToTopView";

export default function Notifications() {

    return (
        <ScreenView style={{ justifyContent: "flex-start" }}>
            <ContentBox title="Latest notifications">
                <ScrollToTopView>
                    <NotificationListManager initialCriteria={{ sortBy: "-createdAt" }}>

                    </NotificationListManager>
                </ScrollToTopView>
            </ContentBox>
        </ScreenView>
    )
}

/*
<NotificationListItem
                    icon="coins-small"
                    title="This is a notification"
                    text="+1K coins"
                    date="04/04/04"
                />
*/