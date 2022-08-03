import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard: React.FC<any> = ({ product }) => {
    return (
        <div className="col-span-3 hover:rounded-lg hover:shadow-md hover:shadow-gray-400">
            <Link href="/product/product">
                <a>
                    {/* <div className="h-[264px] mb-[10px] bg-gray-300"></div> */}
                    <Image src={`http://localhost:8000${product.image}`} objectFit="cover" width={300} height={300} />
                    <div className="px-4">
                        <p className="line-clamp-1 mb-[10px]">{product.name}</p>
                    </div>
                </a>
            </Link>
            <div className="px-4 pb-4">
                <p className="mb-[25px]">Остаток на складе: {product.countInStock}</p>
                <p className="mb-[25px] text-[24px] font-bold">{product.price} ₽</p>
                <button className="w-[145px] text-white bg-main hover:bg-hover rounded-md py-2 px-4">В корзину</button>
            </div>
        </div>
    );
};

export default ProductCard;
