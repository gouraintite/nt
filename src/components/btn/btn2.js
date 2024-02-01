
const Btn2 = ({content}) => {
  return (
    <div className='text-center pt-3 text-lg'>
        <span className='bg-gradient-to-r from-accent to-primary inline-block text-transparent bg-clip-text'>
          {content}
        </span>
        <div className='h-0.5 w-40 px-5 mt-2 gradient content-none'>
        </div>
    </div>
  )
}

export default Btn2