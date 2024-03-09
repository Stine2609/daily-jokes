import { initialize as initializeAuth } from "./auth.js";
import { initialize as initializeContestResult } from "./contestResult.js";

export const initialize = async () => {
    await initializeAuth();
    initializeContestResult();
};