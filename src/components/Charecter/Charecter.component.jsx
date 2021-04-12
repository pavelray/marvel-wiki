/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Item } from "semantic-ui-react";
import { getImageUrl } from "../../utility";
import ComicList from "../Comics/ComicList.component";
import { CharecterWrapper } from "./Charecter.styles";

const Charecter = ({ charecter }) => {
  const { name, description, thumbnail, modified, urls, comics } = charecter;
  const image = getImageUrl(thumbnail);
  return (
    <CharecterWrapper>
      <div>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={image} />
            <Item.Content>
              <Item.Header as="a"> {name}</Item.Header>
              <Item.Meta>
                Last modified: {new Date(modified).toDateString()}
              </Item.Meta>
              <Item.Description>
                {description ||
                  "No Description Available. Check Reference Links"}
              </Item.Description>
              <Item.Extra>
                Reference:
                {urls.length > 0 &&
                  urls.map((link, index) => (
                    <a
                      key={index}
                      className="links"
                      href={link.url}
                      target="_blank"
                    >
                      {link.type}
                    </a>
                  ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <ComicList
                  collectionURI={comics.collectionURI}
                  total={comics.available}
                />
      </div>
    </CharecterWrapper>
  );
};
export default Charecter;
