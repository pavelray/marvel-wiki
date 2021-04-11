import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import charecterReducer from './reducers/charecters.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    charecterReducer
});


export default persistReducer(persistConfig, rootReducer);