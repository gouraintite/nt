import Banner from '@/static/doul.jpg'
import Image from 'next/image'

const Historique = ({ className }) => {
    return (
        <div
            className={`w-full px-2 relative py-2 ${className}`}>
            <div
                className='w-full'>
                <div className='w-full relative group overflow-hidden '>
                    <div className='relative w-full h-80 z-10'>
                        <Image
                            src={Banner}
                            className='relative object-cover group-hover:scale-110 duration-300 ease-in-out'
                            fill={true}
                        />
                    </div>
                    <div className='bg-sky-800/60 backdrop-blur-lg w-full h-full absolute bottom-0 z-40 flex p-3 text-white'>
                        <div className='w-full font-bold flex flex-col justify-center text-xl'>
                            <p className='my-2'>
                              Agence d'achat: <span>20/08/2023</span>
                            </p>
                            <p className='my-2'>
                              Jour d'achat: <span>20/08/2023</span>
                            </p>
                            <p className='my-2'>
                              Itineraire: <span>Yaoundé - Dschang</span>
                            </p>
                            <p className='my-2'>
                              Heure de départ: <span>10:20</span>
                            </p>
                            <p className='my-2'>
                              Type de voyage: <span>Classique</span>
                            </p>
                            <p className='my-2'>
                              Moyen de paiement <span>MTN Momo</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Historique