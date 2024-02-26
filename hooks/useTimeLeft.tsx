import { useState, useEffect } from "react";

function getTimeLeft(contestDate: string) {
    const contestEndDate = new Date(contestDate);
    contestEndDate.setUTCDate(contestEndDate.getUTCDate() + 1);

    const now = new Date();
    const timeLeft = contestEndDate.getTime() - now.getTime(); 

    if (timeLeft < 0) {
        return "Contest has ended";
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}:${minutes} hours left`;
}

export function useTimeLeft(contestDate: string) {
    const [timeLeft, setTimeLeft] = useState('Calculating time left...');

    useEffect(() => {
        const updateTimeLeft = () => {
            setTimeLeft(getTimeLeft(contestDate));
        };

        updateTimeLeft(); // Initial update
        const intervalId = setInterval(updateTimeLeft, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [contestDate]);

    return timeLeft;
}
