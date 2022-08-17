import axiosInstance from './index';

// interfaces
import { ICartProductData, IGetProductsResponse, IProductsData } from '../interfaces/products.interface';
import { AxiosError } from 'axios';
import { IOrderData } from 'src/interfaces/order.interface';

export const getAllProductsService = async (): Promise<IProductsData[]> => {
    try {
        const response = await axiosInstance.get('/products');

        if (response.status === 401) {
            throw new AxiosError("Wrong Credentials!", `${response.status}`);
        }

        return (response.data as IGetProductsResponse).products;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (error.code === '401') {
                throw new Error("Wrong Credentials!");
            }
        }

        throw new Error("Something went wrong, try again!");
    }
};

export const postPlaceOrderService = async (orderItems: ICartProductData[]): Promise<IOrderData> => {
    try {
        const response = await axiosInstance.post('/orders/own/place-order', orderItems);

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