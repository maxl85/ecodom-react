import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';
import { selectProductData } from '../redux/product/selectors';
import { useAppDispatch } from '../redux/store';
import { fetchProduct } from '../redux/product/asyncActions';

// interface IProduct {
//     id: number;
//     brand: string;
//     category: string;
//     countInStock: number;
//     createdAt: string;
//     description: string;
//     image: string;
//     name: string;
//     price: number;
//     user: number;
// }

// const BestOffer: React.FC = () => {
//     const [products, setProducts] = useState<IProduct[]>([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             const { data } = await axios.get<IProduct[]>('http://127.0.0.1:8000/api/products/');
//             setProducts(data);
//         }
//         fetchProducts();
//     }, []);

//     // console.log(products);

//     return (
//         <>
//             <div className="flex justify-between items-baseline h-[40px]">
//                 <Link href="/">
//                     <a className="text-[24px] hover:border-b hover:border-b-main">Лучшее предложение</a>
//                 </Link>
//                 <Link href="/">
//                     <a className="hover:border-b hover:border-b-main">Смотреть всё</a>
//                 </Link>
//             </div>
//             <div className="grid grid-cols-12 gap-6 mb-[50px] mt-[25px]">
//                 {products.slice(0, 4).map((product) => (
//                     <ProductCard key={product.id} product={product}></ProductCard>
//                 ))}
//             </div>
//         </>
//     );
// };

const BestOffer: React.FC = () => {
    const { products, status } = useSelector(selectProductData);
    const dispatch = useAppDispatch();

    const getProducts = async () => {
        dispatch(fetchProduct());
    };

    React.useEffect(() => {
        getProducts();
        // dispatch(fetchProduct());
    }, []);

    // console.log(status);

    return (
        <>
            <div className="flex justify-between items-baseline h-[40px]">
                <Link href="/">
                    <a className="text-[24px] hover:border-b hover:border-b-main">Лучшее предложение</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-b hover:border-b-main">Смотреть всё</a>
                </Link>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-[50px] mt-[25px]">
                {products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>
        </>
    );
};

export default BestOffer;
