import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';

const BestOffer = () => {
    return (
        <>
            <div className="flex justify-between items-baseline">
                <Link href="/">
                    <a className="text-[24px] hover:border-b hover:border-b-main">Лучшее предложение</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-b hover:border-b-main">Смотреть всё</a>
                </Link>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-[50px] mt-[25px]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
};

export default BestOffer;
