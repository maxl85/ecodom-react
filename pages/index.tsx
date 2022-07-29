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
            <div className="container mx-auto">
                {/* <div className="grid grid-cols-12 gap-6 border border-black">
                <div className="min-h-screen bg-gray-200 text-center">1</div>
                <div className="min-h-screen bg-gray-200 text-center">2</div>
                <div className="min-h-screen bg-gray-200 text-center">3</div>
                <div className="min-h-screen bg-gray-200 text-center">4</div>
                <div className="min-h-screen bg-gray-200 text-center">5</div>
                <div className="min-h-screen bg-gray-200 text-center">6</div>
                <div className="min-h-screen bg-gray-200 text-center">7</div>
                <div className="min-h-screen bg-gray-200 text-center">8</div>
                <div className="min-h-screen bg-gray-200 text-center">9</div>
                <div className="min-h-screen bg-gray-200 text-center">10</div>
                <div className="min-h-screen bg-gray-200 text-center">11</div>
                <div className="min-h-screen bg-gray-200 text-center">12</div>

                <header className="col-span-12">
                    <div>
                        <Image src="/logo.png" width={168} height={42} alt="Vercel Logo"></Image>
                    </div>
                </header>
            </div> */}
                <Header />
                <main>
                    <Promo />
                    <BestOffer />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Home;
