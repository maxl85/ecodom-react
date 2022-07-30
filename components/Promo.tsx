import Link from 'next/link';
import React from 'react';

const Promo = () => {
    return (
        <div className="grid grid-cols-12 gap-6 pt-[200px] mb-[50px]">
            <Link href="/">
                <a className="col-span-3 h-[264px] bg-gray-300"></a>
            </Link>
            <Link href="/">
                <a className="col-span-3 h-[264px] bg-gray-300"></a>
            </Link>
            <Link href="/">
                <a className="col-span-3 h-[264px] bg-gray-300"></a>
            </Link>
            <Link href="/">
                <a className="col-span-3 h-[264px] bg-gray-300"></a>
            </Link>

            <Link href="/">
                <a className="col-span-8 h-[264px] bg-gray-300"></a>
            </Link>
            <Link href="/">
                <a className="col-span-4 h-[264px] bg-gray-300"></a>
            </Link>
        </div>
    );
};

export default Promo;
