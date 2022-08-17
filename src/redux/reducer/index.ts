import { combineReducers } from 'redux';
// import { createReducer, createSlice  } from '@reduxjs/toolkit';


// REDUCERS //
import authReducer from '../reducer/auth.reducer';
import ordersReducer from '../reducer/orders.reducer';
import productsReducer from '../reducer/products.reducer';

export default combineReducers ({
    user: authReducer,
    products: productsReducer,
    orders: ordersReducer,
});
