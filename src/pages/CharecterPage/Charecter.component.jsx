/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import PaginationContainer from "../../components/Pagination/Pagination.component";
import SingleCharecter from "../../components/SingleCharecter/SingleCharecter.component";
import {
  getCharecters,
  getCharectersWithPagination,
  startLoading,
} from "../../redux/actions/characters.action";
import {
  isLoading,
  selectAllCharecters,
  selectPaginations,
} from "../../redux/selectors/charecter.selectors";
import Spinner from "../../components/Loader/Loader.component";
import { CharectersContainer } from "./Charecter.styles";

const Charecters = () => {
  const [defaultActivePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const charecters = useSelector(selectAllCharecters);
  const pagination = useSelector(selectPaginations);
  const totalPages = Math.round(pagination.total / pagination.limit);
  useEffect(() => {
    dispatch(getCharecters());
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  },[defaultActivePage])

  const handlePageChange = (activePage) => {
    
    const filter = [
      { key: "limit", value: 20 },
      { key: "offset", value: (activePage-1) * 20 },
    ];
    dispatch(startLoading());
    dispatch(getCharectersWithPagination(filter));
    setActivePage(activePage);
  };

  return (
    <>
      <CharectersContainer>
        <h1>All Charecters</h1>
        <p className='heading-info'>Showing 20 charecters per page</p>
        {charecters && (
          <>
            <List selection verticalAlign="middle" size="big">
              {charecters?.map((c, index) => (
                <SingleCharecter key={index} charecter={c} />
              ))}
            </List>
            <PaginationContainer
              totalPages={totalPages}
              defaultActivePage={defaultActivePage}
              handlePageChange={handlePageChange}
            />
          </>
        )}
      </CharectersContainer>
      {(!charecters || loading) && <Spinner />}
    </>
  );
};

export default Charecters;
