import axiosInstance from './index';

// interfaces
import { IProductsData } from '../interfaces/products.interface';
import { AxiosError } from 'axios';

export const getAllProductsService = async (): Promise<IProductsData[]> => {
    try {
        const response = await axiosInstance.get('/products');

        if (response.status === 401) {
            throw new AxiosError("Wrong Credentials!", `${response.status}`);
        }

        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (error.code === '401') {
                throw new Error("Wrong Credentials!");
            }
        }

        throw new Error("Something went wrong, try again!");
    }
};