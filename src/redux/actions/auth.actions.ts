import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// interfaces
import type { IAuthUserData } from '../../interfaces/auth.interface';

// action types
import { 
    AUTH_LOGIN,
    // AUTH_LOGIN_SUCCESS,
    // AUTH_LOGIN_FAIL
} from "../types/auth.types";

export const loginAction = createAsyncThunk<IAuthUserData>(AUTH_LOGIN, async () => {
    try {
        const response = await axios.post('https://tfm.jediupc.com/api/auth/login', {
            email: 'admin@gmail.com',
            password: 'EP65rqpqbuz>:3)oV#XEAr^:|>=tx/nO'
        }, { headers: { 'Content-Type': 'application/json' } });

        return response.data;
    } catch (error: unknown) {
        throw error ;
    }
});
// export const loginActionFail = createAction(AUTH_LOGIN_FAIL);
// export const loginActionSuccess = createAction<IAuthUserData>(AUTH_LOGIN_SUCCESS);



