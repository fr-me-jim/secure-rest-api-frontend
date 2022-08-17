import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import { IProductsState } from '../../interfaces/products.interface';

// actions
import {
    getProductsAction
} from '../actions/products.actions';

const initialState: IProductsState = {
    error: false,
    loading: false,
    message: null,
    product: null,
    products: []
};

const productsReducer: Slice<IProductsState> = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // LOGIN ACTION
        builder.addCase(getProductsAction.pending, (state, _action) => {
            state.loading = true;
        });
        builder.addCase(getProductsAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.error.message || null;
        });
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.error = false;
            state.message = null;
            state.loading = false;
            state.products = action.payload;
        });
    }
});

export default productsReducer.reducer;