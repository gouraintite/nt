
import Historique from '../tools/historique'

const MesHistoriques = () => {
    return (
        <div className='w-full h-screen overflow-scroll pb-12'>
            <div className='relative h-full p-3 py-5'>
                <p className='text-5xl font-bold py-2'>
                    Historique
                </p>
                <div className='mt-12'>
                    <div className="flex flex-wrap lg:flex-none">
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Historique className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesHistoriques