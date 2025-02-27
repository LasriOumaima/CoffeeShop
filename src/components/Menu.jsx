import { motion } from 'framer-motion';
import 'react';
import Img1 from '../assets/coffee-white.png';
import Img2 from '../assets/coffee2.png';

  const MenuData =[ 
{
    id: 1, 
    img: Img2,
    name: "Espresso",
    description:
    " The focus is on a small, elegant ceramic cup filled with a deep, rich coffee. A delicate layer of crema crowns the surface, hinting at its robust flavor and perfect extraction"

},
{
    id: 2, 
    img: Img1,
    name: "Americano",
    description:
    " The focus is on a small, elegant ceramic cup filled with a deep, rich coffee. A delicate layer of crema crowns the surface, hinting at its robust flavor and perfect extraction"

},
{
    id: 3, 
    img: Img2,
    name: "Cappucino",
    description:
    " The focus is on a small, elegant ceramic cup filled with a deep, rich coffee. A delicate layer of crema crowns the surface, hinting at its robust flavor and perfect extraction"

},
  ];

const Menu = () => {
  return (
    <div id='menu' className='py-40'>
        <div className='max-w-7xl mx-auto'>
            {/*Heading section */}
            <div className='text-center mb-20'>
                <motion.h1 
                initial={{opacity:0 ,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1.5,delay:0.5}}
                className='text-4xl font-bold font-cursive text-amber-900'>Best Coffee for you</motion.h1> 
            </div>
            {/* menu card section  */}
            <motion.div
              initial={{opacity:0 ,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5,delay:0.5}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {MenuData.map((menu)=> (
                    // eslint-disable-next-line react/jsx-key
                    <div className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative 
                    shadow-xl duration-high group max-w-[300px]'> {/* had code dyl tailwind pour dok les case liwera kola img */}
                      <div className='h-[122px]'>
                        <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 
                        group-hover:scale-105 group-hover:rotate-6 duration-300'/> {/*had code tail dyal img finma dwzti souris dor dir rotation khefifa */}
                      </div>
                      {/*had code lif div litht hd cmt rah howa dakchi lifost kola cart prix... */}
                      <div className='p-4 text-center'>
                        <div className='w-full'></div>
                        <h1 className='text-xl font-bold'>{menu.name}</h1>
                        <p className='text-gray-500 group-hover:text-xhite duration-high text-sm line-clamp-2'>{menu.description}</p>
                        <div className='flex justify-between mt-5 px-6 items-center'>
                            <p className='text-lg font-semibold'>$3.75</p>
                            <button className='bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-amber-900'> OrderNow </button>
                             {/*hna yb9a tbdl lon dyal button a chaque fois maykunch bhal cart flon  */}
                             </div>


                      </div>
                    </div>    
                ))}

            </motion.div>

        </div>
      
    </div>
  )
}

export default Menu
