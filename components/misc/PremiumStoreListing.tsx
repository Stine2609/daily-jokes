import { View, Image, StyleSheet } from "react-native";
import ContentBox from "../layout/ContentBox";
import Button from "../buttons/Button";
import Text from "../generalUI/Text";
import { colors } from "./Colors";
import PulseAnimation from "../animations/PulseAnimation";
import CircularButton from "../buttons/CircularButton";

interface PremiumStoreListingProps {
    title: string;
    price: string;
    discount?: string;
    oldPrice?: string;
    offers: string[];
}

export default function PremiumStoreListing(props: PremiumStoreListingProps) {
    const { title, price, discount, oldPrice, offers } = props;

    return (
        <ContentBox
            ribbonTitle={{
                topText: title,
                bottomText: "Premium",
            }}
            width={"80%"}
        >
            <View style={styles.listingContainer}>
                {offers.map((offer, index) => (
                    <View key={index} style={styles.offersContainer}>
                        <Text size={22} shadow={false} color={colors.purple.medium}>{'\u2022'} {offer}</Text>

                    </View>
                ))}
                <Button height={36} label="Buy" variant="blue" />
            </View>
            {/* {discount && (
                <View style={styles.discountContainer}>
                    <PulseAnimation>
                        <Text size={24} color={colors.yellow.light} shadowColor={colors.red.dark}>{discount}</Text>
                    </PulseAnimation>
                </View>
            )} */}
        </ContentBox>
    )
}

const styles = StyleSheet.create({
    listingContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },

    offersContainer: {

    },

    discountContainer: {
        position: "absolute",
        top: -50,
        right: -30,
        transform: [{ rotate: '20deg' }],
        zIndex: 9999,
    }
})