import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {};

const middleware = [ thunk ];

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: compose ( applyMiddleware(...middleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
