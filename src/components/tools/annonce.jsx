import Banner from '@/static/doul.jpg'
import Image from 'next/image'
import { Heart } from 'iconoir-react'

const Annonce = ({ className }) => {
    return (
        <div
            className={`w-full px-2 relative py-2 ${className}`}>
            <div
                className='w-full'>
                <div className='w-full relative group overflow-hidden '>
                    <div className='bg-sky-800/60 backdrop-blur-xl w-auto h-auto rounded-full absolute right-0 z-40 p-2 mr-4 flex cursor-pointer text-white'>
                        <Heart className='object-contain mt-2' width={40} height={30} />
                    </div>
                    <div className='top-16 w-auto h-auto rounded-full absolute right-0 z-40 pr-4 flex cursor-pointer text-white'>
                        <div className='lg:text-xl md:text-xl text-sm font-bold'>
                            <span className='font-bold px-2 py-1 rounded-full bg-green-900'>Géneral Voyage</span>
                        </div>
                    </div>

                    <div className='relative w-full h-80 z-10'>
                        <Image
                            src={Banner}
                            className='relative object-cover group-hover:scale-110 duration-300 ease-in-out'
                            fill={true}
                        />
                    </div>
                    <div className='bg-sky-800/60 backdrop-blur-sm lg:w-[96%] md:w-[96%] sm:w-[96%] h-1/3 absolute bottom-2 z-40 rounded-2xl flex mx-3 p-3 text-white'>
                        <div className='w-full'>
                            <div className='flex space-x-2'>
                                <div className='lg:text-xl md:text-xl text-xs font-bold'>
                                    <span className='font-bold'>Yaoundé</span> &nbsp;-&nbsp; <span className='text-primary font-bold'>Douala</span>
                                </div>
                                {/* <div className='lg:text-xl md:text-xl text-sm font-bold'>
                                    <span className='font-bold px-2 py-1 rounded-full bg-green-900'>Féric Voyage</span>
                                </div> */}
                                <div className=''>
                                    3 000 XAF &nbsp; <span className='lg:inline hidden' >Mar 06 Fev</span>
                                </div>
                            </div>
                            <p className='lg:text-xl md:text-xl text-sm font-bold pt-1'>
                                Space for the availables destinations name and a brief description.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Annonce