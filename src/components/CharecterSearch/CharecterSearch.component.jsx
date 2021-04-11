/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharecters } from "../../redux/actions/characters.action";
import { SearchWrapper } from "./CharecterSearch.styles";

const CharecterSearch = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const handleSubmit = () => {
    // Call the search charecter action handler
    setFilter([...filter, { key: "name", value: searchText }]);
    dispatch(searchCharecters([{ key: "name", value: searchText }]));
  };

  return (
    <SearchWrapper>
      <div className="charecter-search-input">
        <input type="text" placeholder="Search a charecter.." value={searchText} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </SearchWrapper>
  );
};

export default CharecterSearch;
