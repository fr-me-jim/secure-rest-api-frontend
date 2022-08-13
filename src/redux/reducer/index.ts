import { combineReducers } from 'redux';
// import { createReducer, createSlice  } from '@reduxjs/toolkit';


// REDUCERS //
import authReducer from '../reducer/auth.reducer';
// import filesReducer from 'redux/reducers/filesReducer';

export default combineReducers ({
    user: authReducer,
    // files: filesReducer,
});
