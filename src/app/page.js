import React from 'react'
import Image from 'next/image'
import next from '../../public/home.svg'
import Link from 'next/link'
import Head from 'next/head'
const Home = () => {
  return (
    <>
<Head>
    <link rel="shortcut icon" href="../public/nyanga.png" />
</Head>
<header className='bg-primary'>
    <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
    <nav className="fixed z-20 w-full bg-white/10 dark:bg-gray-900/80 backdrop-blur-sm navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6" >
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                    <Link className="relative z-10 mt-6" href="/" aria-label="logo">
                        <Image
                        src='/nyanga.png'
                        loading="lazy"
                        width={50}
                        height={5}
                        className="-mt-6" alt="tailus logo" />
                    </Link>
                    <p className="text-xl font-bold text-blue dark:text-gray-100">Nyanga <span className='text-primary'>Travel</span> </p>
                    <label for="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                        <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-gray dark:bg-gray-300 transition duration-300"></div>
                        <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-5 rounded bg-gray dark:bg-gray-300 transition duration-300"></div>
                    </label>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white/20 dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                    <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                        <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Accueil</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Mon espace</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">

                        <Link href="/inscription" className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">Inscription</span>                    
                        </Link>
                        <Link href="/connexion" className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span className="relative text-sm font-semibold text-white dark:text-gray-900">Connexion</span>                    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>

<div className="relative lg:pt-24 md:pt-24 pt-0">
    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6 pt-24">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Run successful remote and <br className="lg:block hidden" /> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">Hybrid teams</span>.</h1>
        <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                    DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">The best companion bot for your chat app.</span>
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6 h-6" src="images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                            <span className="hidden font-medium md:block dark:text-white">Slack</span>
                        </div>
                    </a>    
                    <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6 h-6" src="images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" />
                            <span className="hidden font-medium md:block dark:text-white">Google Chat</span>
                        </div>
                    </a>   
                    <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6 h-6" src="images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128" />
                            <span className="hidden font-medium md:block dark:text-white">Zoom</span>
                        </div>
                    </a>    
                </div>

                <div className="dark:text-gray-300">
                    🔥🌟 
                    <span>Other integrations :</span> 
                    <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Discord,</a>
                    <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Telegram</a>
                </div>  
            </div>
            <div className="mt-2 md:mt-0 lg:absolute -top-16 -right-10 lg:w-7/12">
                <div className="relative w-full">
                    <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primary to-primary blur-3xl"></div>
                    <Image src={next} className="relative w-full" layout='responsive' alt='home' width={10} height={100}/>
                </div>
            </div>
        </div>
    </div>
</div>
                                    
    </>
  )
}

export default Home