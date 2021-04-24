import React from "react";
import { APP_NAME } from "../../utility/constants";
import { Nav, StyledLink } from "./Header.styles";

const Header = () => {
  const handleMenuClick = () => {
    document.getElementById(
      "responsive-menu"
    ).checked = !document.getElementById("responsive-menu").checked;
  };
  return (
    <Nav>
      <input id="responsive-menu" type="checkbox" />
      <label htmlFor="responsive-menu">
        {APP_NAME} <span id="menu-icon"></span>
      </label>
      <div id="overlay"></div>
      <ul>
        <li>
          <StyledLink to="/" onClick={handleMenuClick}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/charecters" onClick={handleMenuClick}>Charecters</StyledLink>
        </li>
        <li>
          <StyledLink to="/search" onClick={handleMenuClick}>Search</StyledLink>
        </li>
        <li>
          <StyledLink to="/about" onClick={handleMenuClick}>About</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;
