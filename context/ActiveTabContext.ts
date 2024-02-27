import { createContext, Dispatch, SetStateAction } from "react";

interface ActiveTabContextType {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

const ActiveTabContext = createContext<ActiveTabContextType>({
    activeTab: 0,
    setActiveTab: () => {},
});

export default ActiveTabContext;