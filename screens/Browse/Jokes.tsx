import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SearchBar from "../../components/generalUI/SearchBar";
import FilterToggle from "../../components/generalUI/FilterToggle";
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import JokeListManager from '../../components/managers/JokeListManager';
import { useContest } from '../../hooks/useContest';

export default function Jokes() {
    const [activeFilter, setActiveFilter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const contest = useContest();

    return(
        <View style={{flex: 1}}>
            <ScrollToTopView>
                <SearchBar placeholder="Search..." onSearch={setSearchQuery}/>
                <FilterToggle
                    options={[
                        { label: "recent" },
                        { label: "top" },
                    ]}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <View style={{ width: "100%", alignSelf: "center" }}>
                    <JokeListManager initialCriteria={{
                        exclude: { contestId: { not: contest.id } },
                        sortBy: activeFilter == 0 ? "-createTimeStamp" : "-score",
                        searchQuery: searchQuery 
                    }}>

                    </JokeListManager>
                </View>
            </ScrollToTopView>
        </View>
    )
}