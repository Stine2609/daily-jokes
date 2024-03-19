import ScreenView from "../components/layout/ScreenView";
import ScrollToTopView from "../components/layout/ScrollToTopView";
import StoreListing from "../components/misc/StoreListing";
import PremiumStoreListing from "../components/misc/PremiumStoreListing";
import { View, StyleSheet } from "react-native";
import ContentTab from "../components/layout/ContentTab";

export default function Store() {

    return (
        <ScreenView style={{ justifyContent: "flex-start" }}>
            <ContentTab
                contentSpacing={10}
                tabs={[
                    {
                        name: "Coins",
                        component: (
                            <ScrollToTopView containerStyle={{ marginTop: 20 }}>
                                <View style={styles.coinStoreContainer}>
                                    <StoreListing
                                        title="100 Coins"
                                        icon="coins-small"
                                        price="$0.99"
                                    />
                                    <StoreListing
                                        title="250 Coins"
                                        icon="coins-medium"
                                        price="$1.99"
                                    />
                                    <StoreListing
                                        title="500 Coins"
                                        icon="coins-big"
                                        price="$2.70"
                                        discount="Save 10%"
                                        oldPrice="$2.99"
                                    />
                                    <StoreListing
                                        title="1000 Coins"
                                        icon="coins-chest"
                                        price="$5.99"
                                    />
                                </View>
                            </ScrollToTopView>
                        )
                    },
                    {
                        name: "Premium",
                        component: (
                            <ScrollToTopView>
                                <PremiumStoreListing
                                    title="Monthly"
                                    price="$5.99"
                                    offers={[
                                        "No ads"
                                    ]}
                                />
                            </ScrollToTopView>
                        )
                    },
                ]}
            />

        </ScreenView>
    )
}

const styles = StyleSheet.create({
    coinStoreContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: 40,
        columnGap: 20,
    }
})