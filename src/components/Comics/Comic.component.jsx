/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Item } from "semantic-ui-react";
import { getImageUrl, getPrice, getReleaseDate } from "../../utility";
import { ComicWrapper } from "./Comic.style";

const Comic = ({ comic }) => {
  const { title, thumbnail, prices, pageCount, urls, description, dates } = comic;
  const imageUrl = getImageUrl(thumbnail);
  const printPrice = getPrice(prices);
  const releaseDate = getReleaseDate(dates);
  return (
    <ComicWrapper>
      <Item.Group unstackable>
        <Item>
          <Item.Image size="tiny" src={imageUrl} />
          <Item.Content>
            <Item.Header>{title}</Item.Header>
            <Item.Meta>
              <span className="price">Published: {releaseDate}</span>
            </Item.Meta>
            <Item.Meta>
              <span className="price">Price: ${printPrice}</span>
            </Item.Meta>
            <Item.Meta>
              <span className="price">Total Pages: {pageCount}</span>
            </Item.Meta>
            <Item.Description>
              {description || "No Description Available. Check Reference Links"}
            </Item.Description>
            <Item.Extra>
              Reference:
              {urls.length > 0 &&
                urls.slice(0, 2).map((link, index) => (
                  <a
                    key={index}
                    className="comic-links"
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
    </ComicWrapper>
  );
};

export default Comic;
