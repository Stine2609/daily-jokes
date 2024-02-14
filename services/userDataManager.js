import { storeData as secureStoreData } from "../utils/secureStorage";
import { storeData } from "../utils/storage";
import { getData as secureGetData } from "../utils/secureStorage";
import { getData } from "../utils/storage";

export class UserDataManager {
    static async storeUserData(data) {
        if (data.token) {
            await UserDataManager.storeToken(data.token);
            delete data.token;
        }

        await UserDataManager.storeUserDetails(data);
    }

    static async storeToken(token) {
        await secureStoreData("token", token);
    }

    static async storeUserDetails(data) {
        await storeData("user", data);
    }

    static async getToken() {
        try {
            const token = await secureGetData("token");
            return token;
        } catch (e) {
            console.error('Error retrieving token', e);
            return undefined;
        }
    }

    static async getUserDetails() {
        try {
            const userDetails = await getData("user");
            return userDetails;
        } catch (e) {
            console.error('Error retrieving user details', e);
            throw e;
        }
    }
}