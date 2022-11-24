import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/slice';

import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { product: productReducer },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
