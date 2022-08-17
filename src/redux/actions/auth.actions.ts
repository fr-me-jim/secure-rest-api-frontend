import { createAsyncThunk } from '@reduxjs/toolkit';

// interfaces
import type { ILoginUserCredentials, ISigninUserData } from '../../interfaces/auth.interface';

// services
import { 
    postLoginService,
    postSigninService,
    getLogoutService
} from "../../service/auth.services";

// action types
import { 
    AUTH_LOGIN,
    AUTH_SIGNIN,
    AUTH_LOGOUT
} from "../types";

export const loginAction = createAsyncThunk(
    AUTH_LOGIN, 
    async (userCredentials: ILoginUserCredentials) => {
        try {
            return await postLoginService(userCredentials.email, userCredentials.password);
        } catch (error: unknown) {
            throw error;
        }
    }
);

export const signinAction = createAsyncThunk(
    AUTH_SIGNIN, 
    async (userSigninData: ISigninUserData) => {
        try {
            return await postSigninService(userSigninData);
        } catch (error: unknown) {
            throw error;
        }
    }
);

export const logoutAction = createAsyncThunk(
    AUTH_LOGOUT, 
    async () => {
        try {
            await getLogoutService();
        } catch (error: unknown) {
            throw error;
        }
    }
);