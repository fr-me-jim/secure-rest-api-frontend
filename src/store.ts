import rootReducer from './redux/reducer';
// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware()
});

export default store;
