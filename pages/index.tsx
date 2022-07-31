import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Head from 'next/head';
import Promo from '../components/Promo';
import BestOffer from '../components/BestOffer';
import Footer from '../components/Footer';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>ЭкоДом - Домашняя страница</title>
            </Head>
            {/* <Header /> */}
            {/* <div className="container mx-auto"> */}
            {/* <Header /> */}
            <main>
                <Promo />
                <BestOffer />
            </main>
            {/* </div> */}
        </>
    );
};

export default Home;
