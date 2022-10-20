import {configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducer';


const store = configureStore({
    reducer: {
        greetin: greetingReducer,
    }
});

export default store;