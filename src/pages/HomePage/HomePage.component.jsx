import React from "react";
import { HomePageContainer } from "./HomePage.styles";
import HomeImage from "../../assects/home-image.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomePageContainer imageUrl={HomeImage}>
      <div className="heading-wrapper">
        <h1 className="heading-main">Marvel Wiki</h1>
        <div className='heading-list'>
            <span><Link to='/charecters'>All Charecters</Link></span>
            <span><Link to='/search'>Search A Charecter</Link></span>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
