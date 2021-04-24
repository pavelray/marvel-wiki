/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CharecterResult from "../../components/CharecterResult/CharecterResult.compoment";
import CharecterSearch from "../../components/CharecterSearch/CharecterSearch.component";
import { initState, searchCharecters } from "../../redux/actions/characters.action";
import { SearchPageContainer } from "./CharecterSearchPage.styles";

const CharecterSearchPage = (props) => {
  const { match } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initState());
  }, []);
  useEffect(() => {
    if (Object.keys(match.params).length > 0) {
      dispatch(searchCharecters([{ key: "name", value: match.params.name }]));
    }
  }, [match]);

  return (
    <SearchPageContainer>
      <CharecterSearch />
      <CharecterResult />
    </SearchPageContainer>
  );
};

export default CharecterSearchPage;
