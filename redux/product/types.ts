export type Product = {
    id: number;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    price: string;
    countInStock: number;
    createdAt: string;
    user: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface ProductSliceState {
    products: Product[];
    status: Status;
}
