import Btn from '../btn/btn'

import { GridPlus, CloudUpload, BinHalf, Clock } from 'iconoir-react'
import Annonce from '../tools/annonce'

const MesAnnonces = () => {
    return (
        <div className='w-full h-screen overflow-scroll'>
            <div className='relative h-full p-3 py-5'>
                <p className='text-5xl font-bold py-2'>
                    Mon Agenda
                </p>
                <div className='flex flex-wrap justify-start space-x-3 mt-12'>
                    <Btn 
                        content={<p className='flex justify-between gap-3 cursor-pointer rounded-3xl'>
                        <div>
                            <GridPlus />
                        </div>
                        <p>
                            Plannifiées
                        </p>
                    </p>}
                    />
                    <div
                        className='flex justify-around space-x-3 p-3 px-5 border-2 border-black cursor-pointer rounded-2xl'
                        onClick={() => {
                            setStep(prev => prev - 1)
                        }}>
                        <CloudUpload />
                        <p>
                            Plannifier
                        </p>
                    </div>
                    <div
                        className='flex justify-around space-x-3 p-3 px-5 border-2 border-black cursor-pointer rounded-2xl'
                        onClick={() => {
                            setStep(prev => prev - 1)
                        }}>
                        <Clock />
                        <p>
                            Passées
                        </p>
                    </div>
                    <div
                        className='flex justify-around space-x-3 p-3 px-5 border-2 border-black cursor-pointer rounded-2xl'
                        onClick={() => {
                            setStep(prev => prev - 1)
                        }}>
                        <BinHalf />
                        <p>
                            Supprimées
                        </p>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className="flex flex-wrap lg:flex-none">
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesAnnonces