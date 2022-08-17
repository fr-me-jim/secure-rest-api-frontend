import { createAsyncThunk } from '@reduxjs/toolkit';

// interfaces
// import type { IProductsData } from '../../interfaces/products.interface';

// services
import { 
    getAllProductsService,
} from "../../service/products.services";

// action types
import { 
    GET_PRODUCTS,
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