export interface IGetProductsResponse {
    products: IProductsData[];
};

export interface IProductsData {
    id: string;
    name: string;
    image: string;
    price: number;
    stock: number;
    premium: 0 | 1;
    category: string;
    description: string;

    createdAt?: Date;
    updatedAt?: Date;
};

export interface IProductsState {
    error: boolean;
    loading: boolean;
    message: string | null;
    product: IProductsData | null;
    products: IProductsData[];
}