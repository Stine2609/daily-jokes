import { storeData as secureStoreData, removeData as secureRemoveData } from "../utils/secureStorage";
import { storeData, removeData } from "../utils/storage";
import { getData as secureGetData } from "../utils/secureStorage";
import { getData } from "../utils/storage";

const TOKEN_STORAGE_KEY = "token";
const USER_STORAGE_KEY = "user";
const DEVICEID_STORAGE_KEY = "deviceID";

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

    static async storeDeviceID(deviceID) {
        await secureStoreData(DEVICEID_STORAGE_KEY, deviceID)
    }

    static async getDeviceID() {
        try {
            const deviceID = await secureGetData(DEVICEID_STORAGE_KEY);
            return deviceID;
        } catch (e) {
            console.error('Error retrieving deviceID', e);
            return undefined;
        }
    }

    // Debug function to clear all stored data
    static async clearAllData() {
        await removeData(USER_STORAGE_KEY);

        await secureRemoveData(TOKEN_STORAGE_KEY);
        await secureRemoveData(DEVICEID_STORAGE_KEY);

        console.log('All data cleared for testing purposes.');
    }
}