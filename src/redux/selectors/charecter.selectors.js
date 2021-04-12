import { createSelector } from 'reselect';
import { getImageUrl } from '../../utility';

const selectCharecterReducer = state => state.charecterReducer;

export const selectCharecters = createSelector(
    [selectCharecterReducer],
    charecter => charecter.charecters
)

export const selectCharecterComics = createSelector(
    [selectCharecterReducer],
    charecter => charecter.comics
)

export const charecterName = createSelector(
    [selectCharecters],
    charecter => charecter[0]?.name
)

export const charecterImage = createSelector(
    [selectCharecters],
    charecter => getImageUrl(charecter[0]?.thumbnail)
)

export const selecterErrorMessage = createSelector(
    [selectCharecterReducer],
    charecter => charecter.errorMessage
)

export const isLoading = createSelector(
    [selectCharecterReducer],
    charecter => charecter.loading
)