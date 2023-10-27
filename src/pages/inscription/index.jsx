'use client'

import Image from 'next/image'
// import logo from '../../public/next.svg'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const [hide, setHide] = useState(true)

  const handleHidePassword = () => {
    setHide(!hide)
  }

  return (

    <div className="relative py-16 bg-primary/10 h-screen">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-dark/20 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="px-2 sm:p-9">
              <Link href='/' className="flex items-center justify-center">
                <Image
                  src='/nyanga.png'
                  loading="lazy"
                  width={90}
                  height={5}
                  className="mr-4 -mt-6" alt="tailus logo" />
              </Link>
              <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Inscrivez-vous</h2>
              <form action="" className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Ex: nyangatravel@gmail.com'
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className='flex w-full space-x-2'>
                    <div className="space-y-2 w-1/2">
                      <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Nom d'utilisateur</label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder='Ex: Nyanga'
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>
                    <div className="space-y-2 w-1/2">
                      <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Téléphone</label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder='Ex: 6 77 00 00 00 00'
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>
                </div>
                <div className='flex w-full space-x-2'> 

                <div className='w-1/2'>
                  <div className="flex items-center justify-between pb-1">
                    <label htmlFor="pwd" className="text-gray-600 dark:text-gray-300">Mot de passe</label>
                  </div>
                  <input
                    type={hide ? "password" : "text"}
                    name="pwd"
                    id="pwd"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  <p
                    onClick={handleHidePassword}
                    className='text-primary cursor-pointer py-1'
                  >{!hide ? 'cacher ' : 'voir '}le mot de passe</p>
                </div>
                <div className='w-1/2'>
                  <div className="flex items-center justify-between pb-1">
                    <label htmlFor="pwd" className="text-gray-600 dark:text-gray-300">Confirmer votre mot de passe</label>
                  </div>
                  <input
                    type={hide ? "password" : "text"}
                    name="pwd"
                    id="pwd"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                </div>

                <button type="submit" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="relative text-base font-semibold text-white dark:text-dark">S'inscrire</span>
                </button>

                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                  Vous avez déja un compte? {'  '}
                  <a href="/connexion" className="text-primary">Connectez-vous</a>
                </p>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>&copy; Nyanga travel</span>
            <a href="#" className="text-sm hover:text-primary">Contact</a>
            <a href="#" className="text-sm hover:text-primary">Termes & Conditions d'utilsation</a>
          </div>
        </div>
      </div>
    </div>

  )
}
