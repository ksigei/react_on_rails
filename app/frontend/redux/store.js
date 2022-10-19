import {configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {greetingreducer} from './reducer';

const rootReducer = combineReducers({
    greetingreducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;