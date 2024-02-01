import React from 'react';
import Image from 'next/image';
import next from '../../public/home.svg';
import Link from 'next/link';
import Head from 'next/head';
const Home = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/nyanga.png" />
      </Head>
      <div className="relative lg:pt-24 md:pt-24 pt-0 overflow-clip h-screen bg-primary/25">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6 pt-24 h-full">
          <div className="lg:flex">
            <div className="mt-2 md:mt-0 lg:absolute -top-16 -right-10 lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full ring  m h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primary to-primary blur-3xl"
                ></div>
                <Image
                  src={next}
                  className="relative w-full"
                  layout="responsive"
                  alt="home"
                  width={8}
                  height={90}
                />
              </div>
            </div>
            <div className="relative -mt-4 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-5/12 ">
              <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue dark:from-primaryLight dark:to-blueLight">
                  Une façon facile de voyager
                </span>
                .
              </h1>

              <p className="sm:text-lg lg:text-2xl font-bold text-gray-700 dark:text-gray-300 lg:w-11/12">
                Trouvez dès à présent vers où vous pouvez voyager et achetez vos
                billets depuis votre lit.
              </p>
              <div className="flex justify-center lg:mx-0 mx-auto w-10/12">
                <Link
                  href="/connexion"
                  className="relative flex h-12 w-full justify-center items-center ml-auto sm:items-center sm:justify-center sm:px-6 before:absolute before:inset-0 before:rounded-lg before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-lg font-semibold text-white dark:text-gray-900">
                    Commencer
                  </span>
                </Link>
              </div>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">
                Vous avez déja un compte?{' '}
                <span className="text-primary">connectez-vous</span> .
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
