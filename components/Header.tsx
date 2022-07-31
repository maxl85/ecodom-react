import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { TbMenu2, TbUser, TbShoppingCart, TbSearch } from 'react-icons/tb';

import logo from '../public/logo.png';
import CatalogDropdown from './CatalogDropdown';

const Header = () => {
    const prevScrollY = useRef(0);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navbar]);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    if (navbar) {
        return (
            <header className="container fixed flex justify-between items-center w-full shadow-[0_10px_5px_-5px_rgba(0,0,0,0.2)] bg-white h-[80px] z-[100] ease-in-out duration-300">
                <div className="flex justify-between items-center w-[324px]">
                    <Link href="/" className="">
                        <a>
                            <Image className="cursor-pointer" src={logo} width={168} height={42} alt="Logo"></Image>
                        </a>
                    </Link>

                    <CatalogDropdown />
                </div>

                <div className="relative">
                    <input className="w-[456px] h-[32px] border border-gray-300 rounded-lg pl-4" placeholder="Поиск товара ..." />
                    <TbSearch className="absolute top-[8px] right-[15px]" />
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
            </header>
        );
    } else {
        return (
            <header className="container fixed flex flex-col justify-between w-full bg-white h-[107px] mt-8 mb-[50px] z-[100] ease-in-out duration-300">
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
                        <CatalogDropdown />
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
    }
};

export default Header;
