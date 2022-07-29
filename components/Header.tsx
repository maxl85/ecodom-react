import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { TbMenu2, TbUser, TbShoppingCart, TbSearch } from 'react-icons/tb';

import logo from '../public/logo.png';

const Header = () => {
    return (
        <header className="flex flex-col justify-between w-full h-[107px] mt-8 mb-[50px] z-[100]">
            {/* Top Header */}
            <div className="flex justify-between items-center">
                <Link href="/">
                    <a>
                        <Image className="cursor-pointer" src={logo} width={168} height={42} alt="Logo"></Image>
                    </a>
                </Link>

                <div className="relative">
                    <input className="w-[456px] h-[32px] border border-gray-300 rounded-lg pl-4" placeholder="Поиск товара ..." />
                    <TbSearch className="absolute top-[8px] right-[15px]" />
                </div>
                <a className="text-[20px] font-medium" href="tel:+78004443216">
                    <MdPhoneInTalk className="inline text-[24px] mr-1" />
                    +7 (800) 444-32-16
                </a>
            </div>

            {/* Bottom header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button className="text-white bg-main hover:bg-hover rounded-md uppercase py-2 px-4">
                        <div className="flex justify-between items-center">
                            Каталог
                            <TbMenu2 className="text-[24px] ml-2" />
                        </div>
                    </button>
                    <ul className="flex">
                        <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-main">
                            <Link href="/">О компании</Link>
                        </li>
                        <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-main">
                            <Link href="/">сотрудничество</Link>
                        </li>
                        <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-main">
                            <Link href="/">как купить</Link>
                        </li>
                        <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-main">
                            <Link href="/">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex">
                    <li className="uppercase cursor-pointer hover:border-b hover:border-b-main">
                        <Link href="/">
                            <a>
                                <TbUser className="inline text-[24px] mr-1" />
                                Профиль
                            </a>
                        </Link>
                    </li>

                    <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-main">
                        <Link href="/">
                            <a>
                                <TbShoppingCart className="inline text-[24px] mr-1" />
                                Корзина
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
