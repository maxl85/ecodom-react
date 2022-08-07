import React, { HTMLProps } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { TbMenu2 } from 'react-icons/tb';
import Link, { LinkProps } from 'next/link';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

// const MyLink = React.forwardRef<HTMLAnchorElement, LinkProps & HTMLProps<HTMLAnchorElement>>((props, ref) => {
//     let { href, children, ...rest } = props;
//     return (
//         <Link href={href}>
//             <a ref={ref} {...rest}>
//                 {children}
//             </a>
//         </Link>
//     );
// });

// Вынести в отдельный компонет. Тогда не нужем будет displayName
const MyLink = React.forwardRef((props: any, ref: any) => {
    let { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a ref={ref} {...rest}>
                {children}
            </a>
        </Link>
    );
});

MyLink.displayName = 'MyLink';

const CatalogDropdown = () => {
    // function CatalogDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="text-white bg-main hover:bg-hover rounded-md uppercase py-2 px-4">
                    <div className="flex justify-between items-center">
                        Каталог
                        <TbMenu2 className="text-[24px] ml-2" />
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute left-[20px] mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-10 focus:outline-none">
                    <div className="flex py-1">
                        <div className="w-[300px] border-r p-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Кровельные материалы
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Металл
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Рубероид и наплавляемые материалы
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Краски
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Пластик
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Электро и бензо инструмент
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Штукатурные смеси
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Электрика
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Хозтовары
                                    </MyLink>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="w-[300px] p-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Профлист
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Газоблок и кирпич
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Цемент
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Линолеум
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Утеплители
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Расходные материалы
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Сантехника
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Крепеж
                                    </MyLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink
                                        href="/category/category"
                                        className={classNames(active ? 'bg-lite text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-lg')}
                                    >
                                        Садовый инвентарь
                                    </MyLink>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

CatalogDropdown.displayName = 'CatalogDropdown';

export default CatalogDropdown;
