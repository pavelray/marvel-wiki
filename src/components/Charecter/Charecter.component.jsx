/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { CharecterWrapper } from "./Charecter.styles";

const Charecter = ({ charecter }) => {
  const { name, description, thumbnail, modified, urls } = charecter;
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
  return (
    <CharecterWrapper>
      <div className="name">
        <h1>
          {name}
          <span>Last modified: {new Date(modified).toDateString()}</span>
        </h1>
      </div>
      <div className="description">
        <img src={image} alt={name} />
        {description || "No Description Available. Check Reference Links"}
      </div>
      <div className="reference">
        <span className="reference-title">Reference:</span>
        {urls.length > 0 &&
          urls.map((link,index) => (
              <a key={index} className="links" href={link.url} target="_blank">
                {link.type}
              </a>
          ))}
      </div>
    </CharecterWrapper>
  );
};
export default Charecter;
