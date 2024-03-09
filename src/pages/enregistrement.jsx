'use client';

import Image from 'next/image';
// import logo from '../../public/next.svg'
import { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Home() {
  const [hide, setHide] = useState(true);

  const handleHidePassword = () => {
    setHide(!hide);
  };

  return (
    <div className="relative py-16 bg-primary/10 h-screen lg:h-screen">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-10/12 lg:w-9/12 xl:w-9/12">
          <div className="rounded-lg border-none bg-white p-6 dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-dark/32 backdrop-blur-2xl">
            <div className="px-6 py-2 sm:p-9">
              <div className="flex items-center justify-center mr-4 -mt-6">
                <Link href="/" className="w-20">
                  <Image
                    src="/nyanga.png"
                    loading="lazy"
                    width={90}
                    height={5}
                    className=""
                    alt="tailus logo"
                  />
                </Link>
              </div>
              <h2 className="my-4 text-2xl font-bold text-gray-800 text-dark">
                Enregistrement
              </h2>
              <form action="" className="space-y-8">
                <div className='flex space-x-3'>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Nom d'utilisateur
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      autocomplete="username"
                      className="input"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autocomplete="username"
                      className="input"
                    />
                  </div>
                </div>
                <div className='flex space-x-3'>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      className="input"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Rôles
                    </label>
                    <select className='input dark:text-dark'>
                      <option value={undefined} children='Choisissez un rôle' />
                      <option value={'Agent'} children='Agent' />
                      <option value={'Agence'} children={'Agence'} />
                      <option value={'Staff'} children={'Staff'} />
                    </select>
                  </div>
                </div>
                <div className='flex space-x-3'>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Mot de passe
                    </label>
                    <div className="input flex justify-between items-center">
                      <input
                        type={hide ? 'password' : 'text'}
                        name="pwd"
                        id="pwd"
                        autocomplete="current-password"
                        className="focus:outline-none w-full"
                      />
                      {hide ? (
                        <FaEyeSlash
                          size={16}
                          className="cursor-pointer"
                          onClick={handleHidePassword}
                        />
                      ) : (
                        <FaEye
                          size={16}
                          color="#48B436"
                          className="cursor-pointer"
                          onClick={handleHidePassword}
                        />
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 w-1/2">
                    <label
                      for="username"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Confirmation
                    </label>
                    <div className="input flex justify-between items-center">
                      <input
                        type={hide ? 'password' : 'text'}
                        name="pwd"
                        id="pwd"
                        autocomplete="current-password"
                        className="focus:outline-none w-full"
                      />
                      {hide ? (
                        <FaEyeSlash
                          size={16}
                          className="cursor-pointer"
                          onClick={handleHidePassword}
                        />
                      ) : (
                        <FaEye
                          size={16}
                          color="#48B436"
                          className="cursor-pointer"
                          onClick={handleHidePassword}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-md before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white dark:text-dark">
                    Enregistrer
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>&copy; Nyanga travel</span>
            <a href="#" className="text-sm hover:text-primary">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Termes & Conditions d'utilsation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
