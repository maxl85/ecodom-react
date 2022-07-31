import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TbChevronRight, TbHome } from 'react-icons/tb';

const product = {
    name: 'Название товара',
    breadcrumbs: [
        { id: 1, name: <TbHome className="text-[22px]" />, href: '/' },
        { id: 2, name: 'Категория', href: '#' },
    ],
};

const Product: React.FC = () => {
    return (
        <div>
            <Head>
                <title>ЭкоДом - Категории</title>
            </Head>
            <div className="pt-[190px]">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-2">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <Link href={breadcrumb.href}>
                                        <a className="mr-2 text-sm font-medium text-gray-900">{breadcrumb.name}</a>
                                    </Link>
                                    {/* <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg> */}
                                    <TbChevronRight className="text-[16px]" />
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <p aria-current="page" className="font-medium text-gray-500">
                                {product.name}
                            </p>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="grid grid-rows-2 grid-cols-12 gap-6 mb-[50px] mt-[25px]">
                <div className="col-span-6 row-span-2 bg-gray-300 h-[552px]">Picture</div>
            </div>
        </div>
    );
};

export default Product;
