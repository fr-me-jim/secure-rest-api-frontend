import { createAsyncThunk } from '@reduxjs/toolkit';

// interfaces
import type { IAuthUserData } from '../../interfaces/auth.interface';

// services
import { postLoginCredentials } from "../../service/auth.services";

// action types
import { 
    AUTH_LOGIN,
    // AUTH_LOGIN_SUCCESS,
    // AUTH_LOGIN_FAIL
} from "../types/auth.types";

export const loginAction = createAsyncThunk<IAuthUserData>(AUTH_LOGIN, postLoginCredentials);
// export const loginActionFail = createAction(AUTH_LOGIN_FAIL);
// export const loginActionSuccess = createAction<IAuthUserData>(AUTH_LOGIN_SUCCESS);



