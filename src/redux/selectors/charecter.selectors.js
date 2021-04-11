import { createSelector } from 'reselect';

const selectCharecterReducer = state => state.charecterReducer;

export const selectCharecters = createSelector(
    [selectCharecterReducer],
    charecter => charecter.charecters
)

export const charecterName = createSelector(
    [selectCharecters],
    charecter => charecter[0]?.name
)

export const charecterImage = createSelector(
    [selectCharecters],
    charecter => `${charecter[0]?.thumbnail.path}.${charecter[0]?.thumbnail.extension}`
)

export const selecterErrorMessage = createSelector(
    [selectCharecterReducer],
    charecter => charecter.errorMessage
)