'use client'

import Image from 'next/image'
// import logo from '../../public/next.svg'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const [hide, setHide] = useState(true)

  const handleHidePassword = ()=>{
    setHide(!hide)
  }

  return (
    
    <div class="relative py-16 bg-primary/10">
    <div class="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
      <div class="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div class="rounded-3xl border border-dark/20 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div class="p-2 py-2 sm:p-9">
            <Link href='/' class="flex items-center justify-center">
              <Image 
                src='/nyanga.png' 
                loading="lazy" 
                width={90}
                height={5}
                class="mr-4 -mt-6" alt="tailus logo" />
            </Link>
              <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Connectez-vous</h2>
            <form action="" class="space-y-8">
              <div class="space-y-2">
                <label for="username" class="text-gray-600 dark:text-gray-300">Nom d'utilisateur</label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  autocomplete="username"
                  class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                />
              </div>
  
              <div>
                <div class="flex items-center justify-between">
                  <label for="pwd" class="text-gray-600 dark:text-gray-300">Mot de passe</label>
                  <button class="-mr-2 p-2" type="reset">
                    <span class="text-sm text-primary">Mot de passe oublié ?</span>
                  </button>
                </div>
                <input
                  type={hide ? "password" : "text"}
                  name="pwd"
                  id="pwd"
                  autocomplete="current-password"
                  class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                />
                <p
                  onClick={handleHidePassword}
                  className='text-primary cursor-pointer py-1'
                >{!hide ? 'cacher ' : 'voir '}le mot de passe</p>
              </div>
              <button type="submit" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-base font-semibold text-white dark:text-dark">Connexion</span>
              </button>
  
              <p class="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                Vous n'avez pas de encore un compte? {'  '}
                <a href="/inscription" class="text-primary">Inscrivez-vous</a>
              </p>
            </form>
          </div>
        </div>
        <div class="space-x-4 text-center text-gray-500">
          <span>&copy; Nyanga travel</span>
          <a href="#" class="text-sm hover:text-primary">Contact</a>
          <a href="#" class="text-sm hover:text-primary">Termes & Conditions d'utilsation</a>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}
