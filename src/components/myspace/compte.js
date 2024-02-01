import Image from 'next/image'
import { EditPencil, Eye, EyeClosed } from 'iconoir-react'
import Place from '@/static/doul.jpg'
import { useState } from 'react'
import Btn from '../btn/btn'


const Compte = () => {

    const [hide, setHide] = useState(true)
    return (
        <div className='w-full h-full'>
            <div className='relative h-full flex justify-around items-center space-x-12 p-9 py-5'>
                <div className='w-1/2'>
                    <p className='text-5xl font-black py-2'>
                        Mon espace <span className='text-blue'>Nyanga</span>
                    </p>
                    <p className='text-lg text-justify py-2'>
                        Lorem ipsum dolor sit amet consectetur. Purus at ut egestas scelerisque. Euismod eu pharetra mauris dolor turpis tristique adipiscing sit vulputate. Purus faucibus facilisis sit erat justo. Id hac netus lacus orci vel lacus enim. Sit elementum elementum porttitor commodo interdum potenti volutpat. Fames faucibus fringilla vel posuere turpis. Nam maecenas sed sit facilisi enim iaculis.
                    </p>

                    <p className='text-3xl font-bold py-6'>
                        Mes informations
                    </p>
                    <div className='flex justify-between bg-blue/10 p-2 rounded-3xl'>
                        <div className='h-20 w-20 relative'>

                        </div>
                        <p className='text-blue flex items-center'>
                            Changer
                        </p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-blue mb-3'>
                            Nom(s) et Prénom(s)
                        </p>
                        <div className='bg-blue/10 p-3 rounded-xl flex justify-between ms-2'>
                            <p>
                                Les noms que je me suis inscrit avec
                            </p>
                            <EditPencil />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-blue mb-3'>
                            Nom(s) et Prénom(s)
                        </p>
                        <div className='bg-blue/10 p-3 rounded-xl flex justify-between ms-2'>
                            <p>
                                Les noms que je me suis inscrit avec
                            </p>
                            <EditPencil />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-blue mb-3'>
                            Nom(s) et Prénom(s)
                        </p>
                        <div className='bg-blue/10 p-3 rounded-xl flex justify-between ms-2'>
                            <p>
                                Les noms que je me suis inscrit avec
                            </p>
                            <EditPencil />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-blue mb-3'>
                            Nom(s) et Prénom(s)
                        </p>
                        <div className='bg-blue/10 p-3 rounded-xl flex justify-between ms-2'>
                            <p>
                                Les noms que je me suis inscrit avec
                            </p>
                            <EditPencil />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-blue mb-3'>
                            Nom(s) et Prénom(s)
                        </p>
                        <div className='bg-blue/10 p-3 rounded-xl flex justify-between ms-2'>
                            <p>
                                Les noms que je me suis inscrit avec
                            </p>
                            <EditPencil />
                        </div>
                    </div>
                    <div className='flex w-full justify-end mt-4'>
                        <button className='bg-gray-400 hover:bg-gray-500 text-white text-center px-4 py-2 rounded-xl focus:outline-none'>
                            Sauvegarder
                        </button>
                    </div>
                </div>
                <div className='w-1/2 h-full flex justify-end'>
                    <div className='w-9/12 bg-sky-950 rounded-3xl p-6 text-white'>
                        <p className='text-5xl font-black py-2 text-white'>
                            Changer le mot de passe
                        </p>

                        <div className='w-full flex flex-col mx-auto my-4 grow text-white rounded-2xl p-6'>
                            <div className='grow'>
                                <div className='my-9'>
                                    <label className='text-white'>
                                        Ancien mot de passe
                                    </label>
                                    <div
                                        className=" flex justify-between border-b border-white/20 w-full p-4 text-white">
                                        <input
                                            placeholder='••••••••••••'
                                            type={hide ? "password" : 'text'}
                                            className="w-full bg-transparent text-xl placeholder:text-6xl placeholder:mt-12 focus:outline-none"
                                        />
                                        <div
                                            onClick={() => { setHide(!hide) }}
                                            className='cursor-pointer'>
                                            {hide ? <Eye /> : <EyeClosed />}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className='text-white'>
                                        Nouveau mot de passe
                                    </label>
                                    <div
                                        className=" flex justify-between border-b border-white/20 w-full p-4 text-white">
                                        <input
                                            placeholder='••••••••••••'
                                            type={hide ? "password" : 'text'}
                                            className="w-full bg-transparent text-xl placeholder:text-6xl placeholder:mt-12 focus:outline-none"
                                        />
                                        <div
                                            onClick={() => { setHide(!hide) }}
                                            className='cursor-pointer'>
                                            {hide ? <Eye /> : <EyeClosed />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-none w-11/12 mx-auto mt-4'>
                                <Btn content={
                                    <p className='text-center text-2xl font-bold'>
                                        Changer
                                    </p>
                                }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compte