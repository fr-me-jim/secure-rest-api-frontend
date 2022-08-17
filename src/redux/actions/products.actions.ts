import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartProductData } from 'src/interfaces/products.interface';

// interfaces
// import type { IProductsData } from '../../interfaces/products.interface';

// services
import { 
    getAllProductsService,
    postPlaceOrderService
} from "../../service/products.services";

// action types
import { 
    GET_PRODUCTS,
    PLACE_NEW_ORDER
} from "../types/products.types";

export const getProductsAction = createAsyncThunk(
    GET_PRODUCTS, 
    async () => {
        try {
            return await getAllProductsService();
        } catch (error: unknown) {
            throw error;
        }
    }
);

export const placeOrderAction = createAsyncThunk(
    PLACE_NEW_ORDER, 
    async (orderItems: ICartProductData[]) => {
        try {
            return await postPlaceOrderService(orderItems);
        } catch (error: unknown) {
            throw error;
        }
    }
);