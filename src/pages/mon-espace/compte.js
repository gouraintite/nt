import { Home, Bus, User, Menu, LogOut, Xmark, Plus, Calendar } from 'iconoir-react'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import Compte from '@/components/myspace/compte';
import Historique from '@/components/myspace/historiques';
import { useRouter } from 'next/router';
import MesFavoris from '../../components/myspace/favoris';
import Reservation from '../connexion/reservation';
import Navbar from '@/components/navbar';

const compte = () => {

  const router = useRouter()
  const [collapse, setCollapse] = useState(false)
  const [navItems, setNavItems] = useState([
    {
      id: 0,
      active: false,
      logo: <Home />,
      text: "Accueil",
      func: () => {
        router.push('/')
      }
    },
    {
      id: 1,
      active: true,
      logo: <Plus />,
      text: "Reservation",
      func: () => {
        setStep(1)
      }
    },
    {
      id: 2,
      active: false,
      logo: <Calendar />,
      text: "Agenda",
      func: () => {
        setStep(2)
      }
    },
    {
      id: 3,
      active: false,
      logo: <Bus />,
      text: "Historique",
      func: () => {
        setStep(3)
      }
    },
    {
      id: 4,
      active: false,
      logo: <User />,
      text: "Profil",
      func: () => {
        setStep(4)
      }
    },
  ])

  const [step, setStep] = useState(1);

  const updateValue = (itemId) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };


  return (
    <AnimatePresence>
    <Navbar />
      <div className='flex flex-col-reverse h-screen justify-start'>
        <motion.div
          layout
          initial={{ opacity: 0, height: 70, }}
          animate={{ opacity: 1, height: 90 }}
          transition={{
            delay: 0.1,
            duration: 0.3
          }}
          className={`max-w-screen overflow-hidden relative flex flex-grow justify-around item-start pt-4 max-h-[150px] bg-sky-900 text-white text-xl z-50`}>
          <div className='flex-none'>
            {!collapse ?
              <Menu
                className='cursor-pointer m-1'
                onClick={() => {
                  setCollapse(prev => !prev)
                }} />
              :
              <Xmark
                className='cursor-pointer'
                onClick={() => {
                  setCollapse(prev => !prev)
                }} />}
          </div>
          <div className={`grow flex justify-center text-lg items-start sm:-ml-2 lg:space-x-12 space-x-2 text-white`}>
            {navItems.map(({ id, logo, text, func }) => (
              <motion.div
                {...framerIcon}
                key={id}
                onClick={() => {
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
        <div className='overflow-auto lg:pt-20 z-10'>
          {
            step === 1 && <motion.div
              {...framerStep}>
              <Reservation />
            </motion.div>
          }
          {
            step === 2 && <motion.div
              {...framerStep}>
              <MesFavoris />
            </motion.div>
          }
          {
            step === 3 && <motion.div
              {...framerStep}>
              <Historique />
            </motion.div>
          }
          {
            step === 4 && <motion.div
              {...framerStep}>
              <Compte />
            </motion.div>
          }
        </div>
      </div>
    </AnimatePresence>
  )
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 0.9 },
  transition: {
    type: 'spring',
    damping: 2,
    stiffness: 25,
    restDelta: 0.001
  },
}

const framerStep = {
  exit: { opacity: 0, x: 40 },
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { x: 30 }
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: 3, height: 10 },
    animate: { opacity: 1, x: -1 },
    transition: {
      delay: 0.5 + delay / 10,
      type: 'spring',
      stiffness: 260,
      damping: 10,
      delay: 0.5,
      duration: 0.3
    },
  }
}
export default compte