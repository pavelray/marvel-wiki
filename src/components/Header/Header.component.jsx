import React from "react";
import { APP_NAME } from "../../utility/constants";
import { Nav } from "./Header.styles";

const Header = () => {
  return (
    <Nav>
      <input id="responsive-menu" type="checkbox" />
      <label htmlFor="responsive-menu">
        {APP_NAME} <span id="menu-icon"></span>
      </label>
      <div id="overlay"></div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/charecters">Charecters</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;
