import { Platform } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';

const APIKeys = {
    google: "goog_YJGsWAxeZlSBBpSFrexgBgZpgSW",
};

export const initialize = async () => {
    try {
        console.log("Initializing IAP");

        if (Platform.OS == "android") {
            await Purchases.configure({ apiKey: APIKeys.google });
        } else {
            return;
        }// 

        Purchases.setLogLevel(LOG_LEVEL.DEBUG);

        const offerings = await Purchases.getOfferings();

        console.log("Offerings: ", offerings);
    } catch {

    }
}