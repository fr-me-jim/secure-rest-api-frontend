import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import { IAuthInitialState } from '../../interfaces/auth.interface';

// actions
import {
    loginAction
    // loginActionFail
} from '../actions/auth.actions';

const initialState: IAuthInitialState = {
    data: null,
    error: false,
    loading: false,
    isAdmin: false,
    isAuthenticated: false
};

const authReducer: Slice<IAuthInitialState> = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(loginAction.rejected, (state, _action) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
    }
});

export default authReducer.reducer;