import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from './asyncActions';
import { Product, ProductSliceState, Status } from './types';

const initialState: ProductSliceState = {
    products: [],
    status: Status.LOADING, // loading | success | error
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.status = Status.LOADING;
            state.products = [];
        });

        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.products = [];
        });
    },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
