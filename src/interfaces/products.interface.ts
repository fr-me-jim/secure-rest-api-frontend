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

export interface ICartProductData {
    product_id: string;
    price: number;
    amount: number;
};

// JSX
export interface IProductProps {
    product: IProductsData; 
    currentCart: ICartProductData[];
    setCartHandler: React.Dispatch<React.SetStateAction<ICartProductData[]>>;
}