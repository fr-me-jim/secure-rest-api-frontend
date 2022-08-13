
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
    loading: boolean;
    isAdmin: boolean;
    isAuthenticated: boolean;
};