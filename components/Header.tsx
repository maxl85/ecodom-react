import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { TbMenu2, TbUser, TbShoppingCart, TbSearch } from 'react-icons/tb';

const Header = () => {
    return (
        <header className="flex flex-col justify-between w-full h-[107px] mt-8 z-[100]">
            {/* Top Header */}
            <div className="flex justify-between items-center">
                <Image className="cursor-pointer" src="/../public/logo.png" width={168} height={42} alt="Logo" />
                <div className="relative">
                    <input className="w-[456px] h-[32px] border border-gray-400 rounded-lg pl-4" placeholder="Поиск товара ..." />
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
                    <button className="bg-[#38B44A] hover:bg-[#288136] rounded-md uppercase py-2 px-4">
                        <div className="flex justify-between items-center">
                            Каталог
                            <TbMenu2 className="text-[24px] ml-2" />
                        </div>
                    </button>
                    <ul className="flex">
                        <Link href="/">
                            <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">О компании</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">сотрудничество</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">как купить</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">Контакты</li>
                        </Link>
                    </ul>
                </div>
                <ul className="flex">
                    <Link href="/">
                        <li className="uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">
                            <TbUser className="inline text-[24px] mr-1" />
                            Профиль
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="ml-8 uppercase cursor-pointer hover:border-b hover:border-b-[#38B44A]">
                            <TbShoppingCart className="inline text-[24px] mr-1" />
                            Корзина
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
