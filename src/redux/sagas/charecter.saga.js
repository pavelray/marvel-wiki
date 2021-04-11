import { all, takeLatest, call, put } from "redux-saga/effects";
import marvelApi from "../../apis/marvel-api";
import { getFilterFromPayload, getQueryParams } from "../../utility";
import { STATUS } from "../../utility/constants";
import { noMatchFound, searchCharectersSuccess } from "../actions/characters.action";

import CharecterActions from "../types/charecter.types";

export function* searchCharecters({payload}) {
  try {
    const queryParams = getQueryParams();
    const filters = getFilterFromPayload(payload);
    const url = `/characters?${queryParams}${filters}`;
    const response = yield marvelApi.get(`${url}`);
    if(response?.data?.code === STATUS.OK){
      const charecters = response.data.data.results;
      if(charecters.length >0)
        yield put(searchCharectersSuccess(charecters));
      else
        yield put(noMatchFound())
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchCharecterSagas() {
  yield takeLatest(CharecterActions.SEARCH_CHARECTER, searchCharecters);
}

export function* charecterSagas() {
  yield all([call(watchCharecterSagas)]);
}
