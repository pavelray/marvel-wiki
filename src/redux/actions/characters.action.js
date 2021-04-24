import CharecterActions from '../types/charecter.types';

// Gets all cherectrs of Marvel World
// Default gets first 10 records
export const getCharecters = () => ({
    type: CharecterActions.GET_CHARECTERS,
    payload: {filter:{limit:20 , offset:0}}
});

// Gets all cherectrs of Marvel World
// Used to get charecters with pagination values
// Eg. filter{limit: 10 , offset: 10}
export const getCharectersWithPagination = (filter) => ({
    type: CharecterActions.GET_CHARECTERS,
    payload: filter
});


export const getCharectersSuccess = (charecters) => ({
    type: CharecterActions.GET_CHARECTERS_SUCCESS,
    payload: charecters
});
/**
 * Search any marvel charecter by name, startswith any filter
 * Available filters ( name, nameStartsWith, modifiedSince,
 * comics, series, events, stories)
 **/ 
export const searchCharecters = (filter) => ({
    type: CharecterActions.SEARCH_CHARECTER,
    payload: filter
});

export const searchCharectersSuccess = (charecters) => ({
    type: CharecterActions.SEARCH_CHARECTER_SUCCESS,
    payload: charecters
});


export const noMatchFound = () => ({
    type: CharecterActions.NO_MATCH_FOUND
})

export const getCharecterComics = (collectionURI) => ({
    type: CharecterActions.GET_CHARECTER_COMICS,
    payload: collectionURI
});

export const getCharecterComicsSuccess = (comics) => ({
    type: CharecterActions.GET_CHARECTER_COMICS_SUCCESS,
    payload: comics
});

export const startLoading = () => ({
    type: 'START_LOADING',
    payload: true
});

export const stoptLoading = () => ({
    type: 'STOP_LOADING',
    payload: false
});

export const initState = () => ({
    type: 'INIT_STATE'
});