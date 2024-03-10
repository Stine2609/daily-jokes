import { api } from "../api/api";
import { UserDataManager } from '../services/userDataManager';

export const fetchContestResult = async () => {
    try {
        const result = await api("GET", "/contestresult/unread", undefined, await UserDataManager.getToken());
        return result;
    } catch (error) {
        console.log("Failed to fetch contestResult:", error);
    }
};

const checkForNewContestResults = async () => {
    try {
        const reconnect = async () => {
            const contestResult = await fetchContestResult();
            if (contestResult && contestResult.length > 0) {
                contestResult.forEach(result => {
                    showContestResultPopup(result);
                });
            }
            // Reconnect regardless of whether data was received or not
            setTimeout(checkForNewContestResults, 1000);
        };

        reconnect();
    } catch (error) {
        console.error("Failed to poll for contestResult:", error);
        // Attempt to reconnect after a failure
        setTimeout(checkForNewContestResults, 10000);
    }
};

// {"coins": 0, "contest": {"bots": true, "date": "2024-03-08T00:00:00.000Z", "id": 82, "resultsCalculated": true, "topic": "Lightbulb"}, "contestId": 82, "id": 38, "jokeId": 93, "rank": 3, "read": false, "score": 0, "userId": 29}
export const showContestResultPopup = async (result) => {
    // TODO: contest result modal here

    await api("GET", `/contestresult/read/${result.id}`, undefined, await UserDataManager.getToken());
}

export const initialize = async () => {
    //await checkForNewContestResults();
}