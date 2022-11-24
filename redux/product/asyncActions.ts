import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './types';

export const fetchProduct = createAsyncThunk<Product[]>('product/fetchProductStatus', async (params) => {
    const { data } = await axios.get<Product[]>(`http://127.0.0.1:8000/api/products/`);

    return data;
});
