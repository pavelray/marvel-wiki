import React from "react";
import { useHistory } from "react-router-dom";
import { Image, List } from "semantic-ui-react";
import { getImageUrl } from "../../utility";

const SingleCharecter = ({ charecter }) => {
  const imageUrl = getImageUrl(charecter.thumbnail);
  let history = useHistory();

  const navigateToDetails = (name) => {
    // history.push({
    //   pathname: "/search",
    //   search: `?name=${name}`,
    // });
    history.push(`/search/${name}`);
  };

  return (
    <List.Item>
      <Image avatar src={imageUrl} />
      <List.Content onClick={() => navigateToDetails(charecter.name)}>
        {/* <Link to={`/search?name=${charecter.name}`}> */}
        <List.Header as="a">{charecter.name}</List.Header>
        {/* </Link> */}
      </List.Content>
    </List.Item>
  );
};

export default SingleCharecter;
