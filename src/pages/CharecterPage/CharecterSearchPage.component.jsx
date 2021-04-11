import React from 'react';
import CharecterResult from '../../components/CharecterResult/CharecterResult.compoment';
import CharecterSearch from '../../components/CharecterSearch/CharecterSearch.component';
import { SearchPageContainer } from './CharecterSearchPage.styles';

const CharecterSearchPage = () => {

    return(
        <SearchPageContainer>
            <CharecterSearch />
            <CharecterResult />
        </SearchPageContainer>
    )
}

export default CharecterSearchPage;