/* eslint-disable no-unused-vars */
import {all,call} from 'redux-saga/effects';
import { charecterSagas } from './sagas/charecter.saga';

export default function* rootSaga(){
    yield all(
        [
            call(charecterSagas)
        ],
    )
}