import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
    return (
        <div className="col-span-3 ">
            <Link href="/product/product">
                <a>
                    <div className="h-[264px] mb-[10px] bg-gray-300"></div>
                    <p className="line-clamp-2 mb-[10px]">Название товара</p>
                </a>
            </Link>
            <p className="mb-[25px]">Остаток на складе</p>
            <p className="mb-[25px] text-[24px] font-bold">234 ₽</p>
            <button className="w-[145px] text-white bg-main hover:bg-hover rounded-md py-2 px-4">В корзину</button>
        </div>
    );
};

export default ProductCard;
