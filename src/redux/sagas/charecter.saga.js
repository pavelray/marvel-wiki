import { all, takeLatest, call, put } from "redux-saga/effects";
import marvelApi from "../../apis/marvel-api";
import { getFilterFromPayload, getQueryParams } from "../../utility";
import { STATUS } from "../../utility/constants";
import {
  getCharecterComicsSuccess,
  getCharectersSuccess,
  noMatchFound,
  searchCharectersSuccess,
  stoptLoading,
} from "../actions/characters.action";

import CharecterActions from "../types/charecter.types";

export function* searchCharecters({ payload }) {
  try {
    const queryParams = getQueryParams();
    const filters = getFilterFromPayload(payload);
    const url = `/characters?${queryParams}${filters}`;
    const response = yield marvelApi.get(`${url}`);
    if (response?.data?.code === STATUS.OK) {
      const charecters = response.data.data.results;
      if (charecters.length > 0) yield put(searchCharectersSuccess(charecters));
      else yield put(noMatchFound());
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getCharecterComics({ payload }) {
  try {
    const queryParams = getQueryParams();
    const url = `${payload}?${queryParams}`;
    const response = yield marvelApi.get(`${url}`);
    if (response?.data?.code === STATUS.OK) {
      const comics = response.data.data.results;
      if (comics.length > 0) yield put(getCharecterComicsSuccess(comics));
      else yield put(noMatchFound());
      yield put(stoptLoading());
    }
  } catch (error) {
    console.log(error);
    yield put(stoptLoading());
  }
}

export function* getAllCharecters({payload}) {
  try {
    const queryParams = getQueryParams();
    const filters = getFilterFromPayload(payload);
    const url = `/characters?${queryParams}${filters}`;
    const response = yield marvelApi.get(`${url}`);
    if (response?.data?.code === STATUS.OK) {
      const charecters = response.data.data;
      if (charecters.results.length > 0) {
        yield put(getCharectersSuccess(charecters));
        yield put(stoptLoading());
      }
      else {
        yield put(noMatchFound());
        yield put(stoptLoading());
      }
    }
  } catch (error) {
    console.log(error);
    yield put(stoptLoading());
  }
}

export function* watchCharecterSagas() {
  yield takeLatest(CharecterActions.SEARCH_CHARECTER, searchCharecters);
}

export function* watchGetCharecterComics() {
  yield takeLatest(CharecterActions.GET_CHARECTER_COMICS, getCharecterComics);
}

export function* watchGetCharecters() {
  yield takeLatest(CharecterActions.GET_CHARECTERS, getAllCharecters);
}

export function* charecterSagas() {
  yield all([
    call(watchCharecterSagas),
    call(watchGetCharecterComics),
    call(watchGetCharecters),
  ]);
}
