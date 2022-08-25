import axiosInstance from './index';

// interfaces
import { IAuthUserData, ISigninUserData } from '../interfaces/auth.interface';
import { AxiosError } from 'axios';

export const getCSRFTokenService = async (): Promise<void> => {
    try {
        const response = await axiosInstance.get('/auth/csrf');

        if (response.status === 401) {
            throw new AxiosError("Wrong Credentials!", `${response.status}`);
        }

        const csrf: string = response.data.csrf;

        if (csrf) axiosInstance.defaults.headers.post['XSRF-TOKEN'] = csrf;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (error.code === '401') {
                throw new Error("Wrong Credentials!");
            }
        }

        throw new Error("Something went wrong, try again!");
    }
};

export const postLoginService = async (email: string, password: string): Promise<IAuthUserData> => {
    console.log(axiosInstance.defaults.headers.post)
    try {
        const response = await axiosInstance.post('/auth/login', {
            email,
            password
        });

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

export const postSigninService = async (userSigninData: ISigninUserData): Promise<IAuthUserData> => {
    try {
        const response = await axiosInstance.post('/auth/signin', userSigninData);

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

export const getLogoutService = async (): Promise<void> => {
    try {
        await axiosInstance.get('/auth/logout');

    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (error.code === '401') {
                throw new Error("Wrong Credentials!");
            }
        }

        throw new Error("Something went wrong, try again!");
    }
};
