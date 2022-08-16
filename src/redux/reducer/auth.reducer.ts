import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import { IAuthInitialState } from '../../interfaces/auth.interface';

// actions
import {
    loginAction,
    signinAction,
    logoutAction
    // loginActionFail
} from '../actions/auth.actions';

const initialState: IAuthInitialState = {
    data: null,
    error: false,
    message: null,
    loading: false,
    isAdmin: false,
    isAuthenticated: false
};

const authReducer: Slice<IAuthInitialState> = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // LOGIN ACTION
        builder.addCase(loginAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.isAdmin = action.payload.privileges > 0;
            state.data = action.payload;
        });

        // SIGNIN ACTION
        builder.addCase(signinAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(signinAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(signinAction.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.isAdmin = action.payload.privileges > 0;
            state.data = action.payload;
        });

        // LOGOUT ACTION
        builder.addCase(logoutAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(logoutAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(logoutAction.fulfilled, (state, _action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.isAdmin = false;
            state.data = null;
        });
    }
});

export default authReducer.reducer;