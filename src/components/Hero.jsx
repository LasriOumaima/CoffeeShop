import { motion } from 'framer-motion'
import 'react'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import coffee from '../assets/coffee.png'
function Hero() {
  return (
    <div className='bg-gradient-to-r from-slate-100 to-amber-950  mt-14   '>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
            {/*text section */}
            <div className='space-y-5 px-4 md:px-0'>
              <motion.h3
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1,delay:0.2}}
              
              className='text-amber-800 font-semibold font-cursive text-lg pl-40 '>Welcome to Sandro Coffee</motion.h3>  
              <motion.h1 
               initial={{opacity:0,x:-60}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:1,delay:0.4}}
              className='text-4xl md:text-6xl font-bold font-cursive2 pl-10 '>Experience Artisanal <span className='text-amber-900'> Coffee </span> at Sandro </motion.h1>
               <motion.p
               initial={{opacity:0,x:-60}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:1.2,delay:0.6}}
               className='pl-10 ' > Indulge in our carefully crafted brews , made from ethically sources beans and brewd to perfection.</motion.p>
               <motion.div
               initial={{opacity:0,x:-70}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:1.4,delay:0.8}}
               className='flex gap-2'>
                <a href='#menu' className='pl-40 '><button className='bg-amber-900 text-white px-3 py-2 rounded-md '>View Menu</button> </a>
                <a href='#about'><button className='bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2'>Our story</button> </a>
               </motion.div>
            </div>
             {/*img section */}
             <div className=''>
                 <motion.img 
                 initial={{opacity:0,scale:0.5}}
                 whileInView={{opacity:1,scale:1}}
                 transition={{duration:1.5,delay:0.5}}
                 
                 src={coffee} alt=" " className='w-[500px]'></motion.img>
             </div>
             <motion.img
                initial={{opacity:0,x:400,scale:0.7}}
                whileInView={{opacity:1,x:0,scale:1,rotate:45}}
                transition={{duration:1.8,delay:0.8}}
              
              src={Bean2} alt="" className='absolute hidden md:block bottom-20 left-36 x-10 w-20 rotate-45'/>
             <motion.img
              initial={{opacity:0,x:600,y:200,scale:0.7}}
              whileInView={{opacity:1,x:0,y:0,scale:1}}
              transition={{duration:1.8,delay:0.8}}
             src={Bean1} alt="" className='absolute hidden md:block top-14 left-0 w-20 pl-4'/>
             <motion.img
             initial={{opacity:0,x:-100,y:100,scale:0.7}}
             whileInView={{opacity:1,x:0,y:0,scale:1,rotate:45}}
             transition={{duration:1.8,delay:0.8}}
             src={Bean2} alt="" className='absolute hidden md:block w-20 top-5 right-3 -rotate-45 pr-4 '/>
        </div>
      
    </div>
  )
}

export default Hero
