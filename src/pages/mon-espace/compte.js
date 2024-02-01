import { Home, Bus, User, Menu, Agile, LogOut, Xmark} from 'iconoir-react'
import { AnimatePresence, motion } from 'framer-motion';
import {useState} from 'react'
import Compte from '@/components/myspace/compte';
import MesAnnonces from '@/components/myspace/annonces';
import { useRouter } from 'next/router';
import MesFavoris from '../../components/myspace/favoris';

const compte = () => {

  const router = useRouter()
  const [collapse, setCollapse] = useState(false)
  const [navItems, setNavItems] = useState([
    {
      id: 0,
      active: false,
      logo: <Home />,
      text: "Accueil",
      func: ()=> {
        router.push('/')
      }
    },
    {
      id: 1,
      active: true,
      logo: <User />,
      text: "Mon compte",
      func: ()=> {
        setStep(1)
      }
    },
    {
      id: 2,
      active: false,
      logo: <Bus />,
      text: "Mes voyages",
      func: ()=> {
        setStep(2)
      }
    },
    {
      id: 3,
      active: false,
      logo: <Agile />,
      text: "Mon agenda",
      func: ()=> {
        setStep(3)
      }
    }
  ])

  const [step, setStep] = useState(2);

  const updateValue = (itemId) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, active: true} : { ...item, active: false}
      )
    );
  };

  const godo = ()=>{
    if (collapse) {
      return 250
    } else {
      return 100
    }
  }


  return (
    <div className='flex-row-reverse flex-grow h-screen justify-start'>
        <AnimatePresence>
          <div className='w-screen h-auto overflow-auto z-10'>  
            {
              step === 1 && <motion.div
                              {...framerStep}>
                              <Compte />
                            </motion.div>
            }
            {
              step === 2 &&  <motion.div
                              {...framerStep}>
                              <MesFavoris />
                            </motion.div>
            }
            {
              step === 3 &&   <motion.div
                                {...framerStep}>
                                  <MesAnnonces />
                              </motion.div>
            }
          </div>      
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
                layout
                initial={{ opacity:0, height:30, }}
                animate={{ opacity:1, height:godo() }}
                transition={{
                  delay:0.1, 
                  duration:0.3}}
                className={`w-screen absolute flex-grow flex justify-around item-start pt-4 bg-sky-900 text-white -mt-20 text-xl z-50`}>
            <div className='flex-none'>
              { !collapse ?
                <Menu 
                className='cursor-pointer m-2'
                onClick={()=>{
                  setCollapse(prev=>!prev)
                }} />
                :
                
              <Xmark 
              className='cursor-pointer'
              onClick={()=>{
                setCollapse(prev=>!prev)
              }} />}
            </div>
            <div className={`grow flex justify-center text-lg items-start sm:-ml-2 lg:space-x-12 space-x-2 text-white`}>
              {navItems.map(({id, logo, text, func})=>(
              <motion.div
                  {...framerIcon}
                  key={id}
                  onClick={()=>{
                    updateValue(id)
                    func()
                  }}
                 className={`flex justify-start cursor-pointer hover:duration-300 hover:delay-75 rounded-xl space-x-2 hover:border hover:border-primary hover:bg-white/10 p-2 ${navItems[id].active ? 'border border-primary bg-white/10 text-primary' : 'ease-in border border-transparent'}`}>
                  <div className='w-auto'>
                    {logo}
                  </div>
                  {collapse && 
                  <motion.p {...framerText(1)}>
                    {text}
                  </motion.p>
                  }
              </motion.div>

              ))}
            </div>
            <div className={`item-start`}>
              <motion.div
                    {...framerIcon}
                  className='flex justify-start'>
                  <div className='w-12 m-2'>
                    <LogOut />
                  </div>
                  {collapse && 
                  <motion.p {...framerText(1)}>
                    Déconnexion
                  </motion.p>}
                </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    damping: 3,
    stiffness: 50,
    restDelta: 0.001
  },
}

const framerStep = {
  exit:{ opacity:0, x:40 },
  initial:{ opacity:0, x:-40 },
  animate:{ opacity:1, x:0 },
  transition:{x: 30}
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: 3, height:10 },
    animate: { opacity: 1, x: -1 },
    transition: {
      delay: 0.5 + delay / 10,
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.5,
      duration:0.3
    },
  }
}
export default compte