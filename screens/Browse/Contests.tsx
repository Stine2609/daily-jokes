import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ScrollToTopView from "../../components/layout/ScrollToTopView";
import SearchBar from "../../components/generalUI/SearchBar";
import ContentBox from "../../components/layout/ContentBox";
import ContestListItem from "../../components/listItem/ContestListItem";
import { useContestSearch } from '../../hooks/useContestSearch';
import ContestListManager from '../../components/managers/ContestListManager';

export default function Contests() {
    //const { contests, isLoading } = useContestSearch();

    return(
        <View style={{ flex: 1 }}>
            <ScrollToTopView>
                <SearchBar placeholder="Search..." />
                {/* <ContentBox> */}
                    <ContestListManager initialCriteria={{ filters: { resultsCalculated: true }, sortBy: "-date" }}>
                    </ContestListManager>
                {/* </ContentBox> */}
            </ScrollToTopView>
        </View>
    );
}