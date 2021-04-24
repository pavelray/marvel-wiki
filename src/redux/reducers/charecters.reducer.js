import { MSG_ERROR_NO_MATCH } from "../../utility/constants";
import CharecterTypes from "../types/charecter.types";
const INITIAL_STATE = {
  allCharecters: [],
  charecters: [], // May contain more than one value
  comics: [],
  errorMessage: "",
  loading: false,
};

const charecterReducer = (state = INITIAL_STATE, acion) => {
  switch (acion.type) {
    case 'INIT_STATE':
      return{
        ...INITIAL_STATE
      }
    case CharecterTypes.GET_CHARECTERS_SUCCESS:
      return {
        ...state,
        allCharecters: acion.payload,
        errorMessage: "",
      };
    case CharecterTypes.SEARCH_CHARECTER_SUCCESS:
      return {
        ...state,
        charecters: acion.payload,
        errorMessage: "",
      };
    case CharecterTypes.GET_CHARECTER_COMICS_SUCCESS:
      return {
        ...state,
        comics: acion.payload,
        errorMessage: "",
      };
    case CharecterTypes.NO_MATCH_FOUND:
      return {
        ...state,
        charecters: [],
        errorMessage: MSG_ERROR_NO_MATCH,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default charecterReducer;
