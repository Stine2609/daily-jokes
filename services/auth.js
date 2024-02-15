import { login as apiLogin, loginWithToken as apiLoginWithToken, register as apiRegister } from "../api/auth";
import { UserDataManager } from "./userDataManager";
import { generateRandomCredentials } from "../utils/random";

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

export const autoRegisterDevice = async () => {
    try {
        const { email, password, name, deviceID } = await generateRandomCredentials();

        console.log(email, password, name, deviceID);
        return;
        const user = await register(email, password, name, deviceID);

        console.log('Auto-registered account created successfully.');
        return user;
    } catch (error) {
        console.error('Failed to auto-register device:', error);
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
    //await UserDataManager.clearAllData();
    let token = await UserDataManager.getToken();

    if (token && await validateToken(token)) {
        
    } else {
        await UserDataManager.removeUserData();

        let localDeviceID = await UserDataManager.getDeviceID();

        if (!localDeviceID) {
            autoRegisterDevice();
        }
    }
}

const validateToken = async (token) => {
    if (!token) {
        return false;
    }

    let user = await loginWithToken(token);

    return user?.token !== token;
}