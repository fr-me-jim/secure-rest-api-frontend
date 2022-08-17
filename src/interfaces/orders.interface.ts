export interface IOrdersState {
    error: boolean;
    loading: boolean;
    message: string | null;
    order: IOrderData | null;
    orders: IOrderData[];
}

export interface IOrderData {
    id: string;
    date: Date;
    status: string;
    client_id: string;

    createdAt?: Date;
    updatedAt?: Date;
};