export interface IAuthPayload {
    user: IAuthUserData;
    error: string | null;
};

export interface IAuthResponse {
    user: IAuthUserData;
    errorStatusMessage: string | null;
};

export interface IAuthUserData {
    id: string;
    email: string;
    firstName: string;
    secondName: string;
    privileges: number;

    createdAt?: Date;
    updatedAt?: Date;
};

export interface IAuthInitialState {
    data: IAuthUserData | null,
    error: boolean;
    message: string | null;
    loading: boolean;
    isAdmin: boolean;
    isAuthenticated: boolean;
};

export interface ILoginUserCredentials {
    email: string; 
    password: string;
};

export interface ISigninUserData {
    email: string; 
    firstName: string;
    secondName: string;
    privileges: number;
    password: string;
};