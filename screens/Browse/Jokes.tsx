import { View } from "react-native";
import SearchBar from "../../components/SearchBar";
import FilterToggle from "../../components/FilterToggle";

export default function Jokes() {
    return(
        <View>
            <SearchBar placeholder="Search..." />
            <FilterToggle
                options={[
                    {
                        label: "top",
                    },
                    {
                        label: "recent",
                    }
                ]}
            />
        </View>
    )
}