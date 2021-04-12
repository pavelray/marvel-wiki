/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharecterComics, startLoading } from "../../redux/actions/characters.action";
import { isLoading, selectCharecterComics } from "../../redux/selectors/charecter.selectors";
import { MARVEL_API_URL } from "../../utility/constants";
import Spinner from "../Loader/Loader.component";
import Comic from "./Comic.component";

const ComicList = ({ collectionURI, total }) => {
  const dispatch = useDispatch();
  const comics = useSelector(selectCharecterComics);
  const loading = useSelector(isLoading);
 
  useEffect(() => {
    const uri = `${MARVEL_API_URL}/characters/${collectionURI}/comics`;
    dispatch(startLoading());
    dispatch(getCharecterComics(uri));
  }, [collectionURI]);


  return (
    <div>
      <h3>Comics: <span className="total">[{Number(total).toLocaleString()}]</span></h3>
      {!loading && comics && comics.length > 0 && 
        comics.map((comic, index) => <Comic key={index} comic={comic} />)
      }
      {
        loading && (<Spinner />)
      }
    </div>
  );
};

export default ComicList;
