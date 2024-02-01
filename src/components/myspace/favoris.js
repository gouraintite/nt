import Annonce from '../tools/annonce'

const MesFavoris = () => {
    return (
        <div className='w-full h-screen overflow-scroll'>
            <div className='relative h-full p-2 py-5'>
                <p className='lg:text-5xl lg:text-start text-center text-3xl font-bold py-2'>
                    Destinations
                </p>
                <div className='lg:mt-12 mt-4'>
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

export default MesFavoris