import { login as apiLogin, loginWithToken as apiLoginWithToken, register as apiRegister } from "../api/auth";
import { UserDataManager } from "./userDataManager";

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

export const register = async (email, password, name, deviceID = "") => {
    try {
        let response = await apiRegister(email, password, name, deviceID);

        if (response.user.email === email) {
            UserDataManager.storeUserData(response.user);
            return response.user;
        } else {
            throw new Error('Register failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const initialize = async () => {
    let token = await UserDataManager.getToken();

    if (token && await validateToken(token)) {
        
    } else {
        await UserDataManager.removeUserData();
    }
}

const validateToken = async (token) => {
    if (!token) {
        return false;
    }

    let user = await loginWithToken(token);

    return user?.token !== token;
}