import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import { IOrdersState } from '../../interfaces/orders.interface';

// actions
import {
    getOrdersAction,
    placeOrderAction
} from '../actions/orders.actions';

const initialState: IOrdersState = {
    error: false,
    loading: false,
    message: null,
    order: null,
    orders: []
};

const ordersReducer: Slice<IOrdersState> = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // LOGIN ACTION
        builder.addCase(getOrdersAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(getOrdersAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(getOrdersAction.fulfilled, (state, action) => {
            state.error = false;
            state.message = null;
            state.loading = false;
            state.orders = action.payload;
        });

        // PLACE ORDER ACTION
        builder.addCase(placeOrderAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(placeOrderAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(placeOrderAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.message = null;
            state.orders = [ ...state.orders, action.payload ];
        });

        // // LOGOUT ACTION
        // builder.addCase(logoutAction.pending, (state, _action) => {
        //     state.loading = true;
        // });
        // builder.addCase(logoutAction.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = true;
        //     state.message = action.error.message || null;
        // });
        // builder.addCase(logoutAction.fulfilled, (state, _action) => {
        //     state.loading = false;
        //     state.isAuthenticated = false;
        //     state.isAdmin = false;
        //     state.data = null;
        // });
    }
});

export default ordersReducer.reducer;