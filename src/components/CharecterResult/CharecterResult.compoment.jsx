import React from "react";
import { useSelector } from "react-redux";

import {selectCharecters,
  selecterErrorMessage,
} from "../../redux/selectors/charecter.selectors";
import Charecter from "../Charecter/Charecter.component";
import { ErrorContainer } from "./CharecterResult.styles";

const CharecterResult = () => {
  const charecters = useSelector(selectCharecters)
  const errorMessage = useSelector(selecterErrorMessage);

  return (
    <>
      {charecters.length > 0 && (
          <>
          {charecters.map((charecter,index) => (
            <Charecter key={index} charecter={charecter}/>
          ))}
          </>
      )}
      {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
    </>
  );
};

export default CharecterResult;
