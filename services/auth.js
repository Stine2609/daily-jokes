import { login as apiLogin } from "../api/auth";

export const login = async (email, password) => {
    try {
        let response = await apiLogin(email, password);

        if (response.user.email === email) {
            console.log("Login success");
        } else {
            console.log(JSON.stringify(response));
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};