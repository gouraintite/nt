import { useState, useEffect } from 'react'
import Image from 'next/image'
import Om from '../../../public/om.png'
import Momo from '../../../public/momo.jpeg'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import { motion } from 'framer-motion';
import Btn from '../../components/btn/btn'



export default function Reservation() {
    const [step, setStep] = useState(1);
    const [full, setFull] = useState('')

    const set = () => {
        let val = undefined;
        switch (step) {
            case 1:
                val = 'w-0';
                break;
            case 2:
                val = 'w-1/2';
                break;
            case 3:
                val = 'w-full';
                break;
            default:
                break;
        }
        console.log(val, 'vaaall');
        setFull(val)
    }

    useEffect(() => {
        set()
    }, [step])

    return (
        <>
                <div className='h-screen max-w-screen px-20 pb-12'>
                    <div className='lg:w-1/3 w-full lg:pt-0 pt-12 lg:pb-0 pb-4'>
                        <div className='relative flex justify-between w-full mt-6 z-40'>
                            <div className='step-active'>
                                1
                            </div>
                            <div className={step > 1 ? 'step-active' : 'step'}>
                                2
                            </div>
                            <div className={step > 2 ? 'step-active' : 'step'}>
                                3
                            </div>
                        </div>
                        <div className='relative border border-slate-200 h-0.5 bg-accent/90 w-4/5 flex justify-center -mt-8 mx-auto content-none z-10'>
                            <div className={`relative border border-slate-50/10 h-1 rounded-full bg-primary/90 ${full} flex justify-start me-auto -mt-0.5  content-none z-10`} />
                        </div>
                        {/* <p className='pt-12 text-4xl font-black'>
                            Reservation
                        </p> */}
                    </div>

                    {step === 1 && <>
                        <motion.div
                            exit={{ opacity: 0, x: 0 }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ x: 30 }}

                            className='mt-9 text-start'>
                            <p className='text-3xl font-bold'>Informations personelles</p>
                            <p className='text-xl mt-4'>
                                Lorem ipsum dolor sit amet consectetur. Habitant sapien varius libero non malesuada. Pulvinar in metus etiam semper erat convallis gravida fusce. Sit arcu elit quam dictum turpis. Gravida phasellus nisi mattis ac sem felis nulla.                            </p>
                            <div className="my-2 items-center p-4 w-[98%]">

                                <form className=''>
                                    <div className="my-4">
                                        <label className='text-secondary'>
                                            Nom complet
                                        </label>
                                        <input
                                            placeholder="Ex: BIKO Carl"
                                            type="text"
                                            className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" />
                                    </div>
                                    <div className="my-4">
                                        <label className='text-secondary'>
                                            Numéro de téléphone 
                                        </label>
                                        <input
                                            placeholder="Celui avec lequel vous procéderer au payment OM ou MOMO"
                                            type="text"
                                            className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" />
                                    </div>
                                    <div className="my-4">
                                        <label className='text-secondary'>
                                            Numéro de CNI ou recépicé
                                        </label>
                                        <input
                                            placeholder=""
                                            type="text"
                                            className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" />
                                    </div>
                                    <div className="my-4">
                                        <label className='text-secondary'>
                                            Dénomination
                                        </label>
                                        <select
                                            className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                            <option value='Mr' children='Monsieur' />
                                            <option value='Mme' children='Madame' />
                                        </select>
                                    </div>
                                    {/* <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Numéro de CNI ou recépicé
                                            </label>
                                            <div
                                                className="w-full flex justify-between">
                                                <input
                                                    placeholder='Prix auquel vous souhaitez vendre'
                                                    type='text'
                                                    className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Année de fabrication
                                            </label>
                                            <input
                                                placeholder=""
                                                type="date"
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Marque
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>One</option>
                                            </select>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Modèle
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>One</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Énergie
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>One</option>
                                            </select>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Transmission
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>One</option>
                                            </select>
                                        </div>
                                    </div> */}
                                </form>
                            </div>
                            <div className='flex justify-end mx-6 text-white text-xl '>
                                <div
                                    className='flex justify-around space-x-3 p-3 px-5 bg-gradient-to-r from-primary/80 10% from 90% to-primary 10% cursor-pointer'
                                    onClick={() => {
                                        setStep(prev => prev + 1)
                                    }}
                                >
                                    <p>
                                        Continuer
                                    </p>
                                    <ArrowRight />
                                </div>
                            </div>
                        </motion.div>
                    </>
                    }
                    {step === 2 && <>
                        <motion.div
                            exit={{ opacity: 0, x: 0 }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ x: 30 }}

                            className='mt-9 text-start'>
                            <p className='text-4xl font-bold'>Informations sur votre voyage</p>
                            <p className='text-xl mt-4'>
                                Lorem ipsum dolor sit amet consectetur. Habitant sapien varius libero non malesuada. Pulvinar in metus etiam semper erat convallis gravida fusce. Sit arcu elit quam dictum turpis. Gravida phasellus nisi mattis ac sem felis nulla.                            </p>
                            <div className="my-2 items-center p-4 w-[98%]">

                                <form className=''>
                                    <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Class
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='vip'>V.I.P</option>
                                                <option value='classique'>Classique</option>
                                            </select>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Agence
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>Agence 1</option>
                                                <option value='one'>Agence 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Ville de départ
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>Douala</option>
                                                <option value='one'>Yaoudé</option>
                                                <option value='one'>Bafoussam</option>
                                                <option value='one'>Dschang</option>
                                            </select>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Destination
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>Douala</option>
                                                <option value='one'>Yaoudé</option>
                                                <option value='one'>Bafoussam</option>
                                                <option value='one'>Dschang</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-around space-x-3'>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Heure de départ
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>10:20</option>
                                                <option value='one'>20:20</option>
                                                <option value='one'>10:40</option>
                                            </select>
                                        </div>
                                        <div className="my-4 w-1/2">
                                            <label className='text-secondary'>
                                                Date de départ
                                            </label>
                                            <select
                                                className="border-b focus:border-b-2 border-gray-400 focus:border-secondary w-full bg-transparent text-lg p-3 focus:outline-none" >
                                                <option value='one'>10/07/2024</option>
                                                <option value='one'>10/04/2024</option>
                                                <option value='one'>30/07/2024</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='flex justify-between mx-6 text-xl'>
                                <div
                                    className='flex justify-around space-x-3 p-3 px-5 border-2 cursor-pointer'
                                    onClick={() => {
                                        setStep(prev => prev - 1)
                                    }}
                                >   <ArrowLeft />
                                    <p>
                                        Retour
                                    </p>
                                </div>
                                <div
                                    className='flex justify-around space-x-3 p-3 px-5 bg-gradient-to-r text-white from-primary/80 10% from 90% to-primary 10% cursor-pointer'
                                    onClick={() => {
                                        setStep(prev => prev + 1)
                                    }}
                                >
                                    <p>
                                        Finaliser
                                    </p>
                                    <ArrowRight />
                                </div>
                            </div>
                        </motion.div>
                    </>
                    }
                    {step === 3 && <>
                        <motion.div
                            exit={{ opacity: 0, x: 40 }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ x: 30 }}

                            className='mt-16 text-start'>
                            <p className='text-3xl font-bold'>Finalisation</p>
                            <p className='text-xl mt-4 p-4'>
                                Vous, <span className='font-black text-primary'>Madame Ngoupayou Célestine</span>, joignable au numéro <span className='font-black text-primary'>6 70 00 00 00</span> et détentrice de la <span className='font-black text-primary'>CNI 100864644</span>; souhaitez acheter un billet en <span className='font-black text-primary'>classe VIP</span> à l'agence <span className='font-black text-primary'>Nyanga de Douala</span>,
                                pour vous rendre à <span className='font-black text-primary'>Dschang</span> le <span className='font-black text-primary'>10/07/2024</span>. Heure de départ: <span className='font-black text-primary'>10:20</span>
                            </p>
                            <div className="my-2 items-center p-4 w-[98%] h-auto relative overflow-auto">
                                <p className='text-2xl font-bold mb-4'>
                                    Confirmer et payer
                                </p>
                                <div className='flex w-auto justify-start space-x-2 my-4'>
                                    <div className='w-1/2'
                                        onClick={(e)=>{
                                            alert(e)
                                        }}
                                        >
                                        <Image
                                            src={Om}
                                            alt='OM pay'
                                            width={200}
                                            height={200}
                                            className='object-cover rounded-xl'
                                        />
                                    </div>
                                    <div className='w-1/2'>
                                        <Image
                                            src={Momo}
                                            alt='MOMO pay'
                                            width={200}
                                            height={200}
                                            className='object-cover rounded-xl'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between mx-6 text-xl'>
                                <div
                                    className='flex justify-around space-x-3 p-3 px-5 border-2 cursor-pointer'
                                    onClick={() => {
                                        setStep(prev => prev - 1)
                                    }}
                                >   <ArrowLeft />
                                    <p>
                                        Retour
                                    </p>
                                </div>
                                <Btn
                                    onClick={() => {
                                        return
                                    }}
                                    content={<div
                                        className='flex justify-around space-x-3 w-fit cursor-pointer text-white'>
                                        <p>
                                            Reserver
                                        </p>
                                        <ArrowRight />
                                    </div>}
                                />
                            </div>
                        </motion.div>
                    </>
                    }
                </div>
        </>
    )
}

