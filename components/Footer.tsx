import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/logo2.png';

const Footer = () => {
    return (
        <footer className="bg-main">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[50px]">
                    <Link href="/">
                        <a>
                            <Image className="cursor-pointer" src={logo} width={168} height={42} alt="Logo2"></Image>
                        </a>
                    </Link>
                    <ul className="flex h-[25px] text-white">
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
            </div>
        </footer>
    );
};

export default Footer;
