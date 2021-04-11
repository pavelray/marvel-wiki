import CharecterTypes from '../types/charecter.types';
const INITIAL_STATE = {
    charecters: [], // May contain more than one value
    errorMessage: ''
}

const charecterReducer = (state = INITIAL_STATE, acion) => {
    switch(acion.type){
        case CharecterTypes.SEARCH_CHARECTER_SUCCESS:
            return {
                ...state,
                charecters: acion.payload,
                errorMessage:''
            };
        case CharecterTypes.NO_MATCH_FOUND:
            return {
                ...state,
                charecters: [],
                errorMessage: 'No match found'
            };
        default:
            return state;
    }
}

export default charecterReducer;
