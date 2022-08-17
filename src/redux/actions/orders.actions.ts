import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartProductData } from '../../interfaces/products.interface';

// interfaces
// import type { IProductsData } from '../../interfaces/products.interface';

// services
import { 
    getOwnOrdersService,
    postPlaceOrderService
} from "../../service/orders.service";

// action types
import { 
    GET_ORDERS,
    PLACE_NEW_ORDER
} from "../types";

export const getOrdersAction = createAsyncThunk(
    GET_ORDERS, 
    async () => {
        try {
            return await getOwnOrdersService();
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