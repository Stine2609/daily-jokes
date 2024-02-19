import { create as apiCreate } from "../api/joke";
import { UserDataManager } from "./userDataManager";

export const create = async (joke) => {
    try {
        let response = await apiCreate(
            await UserDataManager.getToken(),
            {
                textBody: joke,
            }
        );

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to create joke');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};