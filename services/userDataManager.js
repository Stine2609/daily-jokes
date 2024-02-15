import { storeData as secureStoreData, removeData as secureRemoveData } from "../utils/secureStorage";
import { storeData, removeData } from "../utils/storage";
import { getData as secureGetData } from "../utils/secureStorage";
import { getData } from "../utils/storage";

const TOKEN_STORAGE_KEY = "token";
const USER_STORAGE_KEY = "user";

export class UserDataManager {
    static async storeUserData(data) {
        if (data.token) {
            await UserDataManager.storeToken(data.token);
            delete data.token;
        }

        await UserDataManager.storeUserDetails(data);
    }

    static async storeToken(token) {
        await secureStoreData(TOKEN_STORAGE_KEY, token);
    }

    static async storeUserDetails(data) {
        await storeData(USER_STORAGE_KEY, data);
    }

    static async getToken() {
        try {
            const token = await secureGetData(TOKEN_STORAGE_KEY);
            return token;
        } catch (e) {
            console.error('Error retrieving token', e);
            return undefined;
        }
    }

    static async getUserDetails() {
        try {
            const userDetails = await getData(USER_STORAGE_KEY);
            return userDetails;
        } catch (e) {
            console.error('Error retrieving user details', e);
            throw e;
        }
    }

    static async removeUserData() {
        await removeData(USER_STORAGE_KEY);
        await secureRemoveData(TOKEN_STORAGE_KEY);
    }
}