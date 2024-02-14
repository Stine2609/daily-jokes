import { login as apiLogin, loginWithToken as apiLoginWithToken } from "../api/auth";
import { UserDataManager } from "./userDataManager";

export const login = async (email, password) => {
    console.log("LOGGING IN");
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

export const loginWithToken = async (token) => {
    try {
        let response = await apiLoginWithToken(token);

        if (response.user.token === token) {
            UserDataManager.storeUserData(response.user);
            return response.user;
        } else {
            throw new Error('Login with token failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const initialize = async () => {
    let token = await UserDataManager.getToken();

    if (token) {
        let user = await loginWithToken(token);

        // Token successfully validated
        if (user.token === token) {
            
        }
    }
}