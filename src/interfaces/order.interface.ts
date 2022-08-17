export interface IOrderData {
    id: string;
    date: Date;
    status: string;
    client_id: string;

    createdAt?: Date;
    updatedAt?: Date;
};