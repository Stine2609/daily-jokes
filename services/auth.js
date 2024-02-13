import { login as apiLogin } from "../api/auth";
import { storeData as secureStoreData } from "../utils/secureStorage";
import { storeData } from "../utils/storage";
import { getData as secureGetData } from "../utils/secureStorage";
import { getData } from "../utils/storage";

export const login = async (email, password) => {
    try {
        let response = await apiLogin(email, password);

        if (response.user.email === email) {
            UserDataManager.storeUserData(response.user);
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

class UserDataManager {
    static async storeUserData(data) {
        if (data.token) {
            await secureStoreData("token", data.token);
            delete data.token;
        }

        await storeData("user", data);
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
            throw e;
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