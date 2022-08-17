import axiosInstance from './index';
import { AxiosError } from 'axios';

// interfaces
import { IOrderData } from '../interfaces/orders.interface';
import { ICartProductData } from '../interfaces/products.interface';

export const getOwnOrdersService = async (): Promise<IOrderData[]> => {
    try {
        const response = await axiosInstance.get('/orders/own');

        if (response.status === 401) {
            throw new AxiosError("Wrong Credentials!", `${response.status}`);
        }

        return response.data.orders;
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