import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import 'react';
import Bg from '../assets/bbz.jpg';
import coffee from '../assets/Coffeeanime.json';



{/* had bg Image htiina fiha wahd pic obdina kankhdo mnha hi blasa machi pic kamla bach nhtoha comme background lina mn b3ed gahn3iyto 3liha f 
    fuction const main dyal about kamla come style  */}
const bgImage ={
      backgroundImage: `url(${Bg})`,
      bacgroundcolor: "#270c03",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height:"100%",
      width:"100%",

};

const About = () => {
  return (
    <div id='about' className='md:py-20 py-40 ' style={bgImage}>
     <motion.h1 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1.5,delay:0.5}}
      
     className='text-white font-cursive text-4xl text-center '> About Us </motion.h1>
    <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'> 
        {/*image section */}
        <motion.div 
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1.5,delay:0.5}}
              >
           <Lottie animationData={coffee} className='md:w-[600px]'/> {/*hadi dik animation lijbna mn lottie site khask telechargihha json othetha
            m3a assets bach t9der t importiha apres otkhdm biha fost lcode */}
        </motion.div>
        {/*text section  */}
        <div className='space-y-4 px-4 md:px-0'>
            <motion.h1
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.5,delay:0.5}}
             className='text-3xl font-cursive text-white'>Passion For Perfect Brew</motion.h1>
            <motion.p
            initial={{opacity:0,y:100}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1.5,delay:0.6}}
            className=' text-white font-cursive2'>Legend has it that coffee was discovered in Ethiopia around the 9th century. Local lore tells of a goat herder named Kaldi who noticed his goats becoming energetic after nibbling on certain red berries. This observation eventually led to the discovery of the stimulating properties of coffee. Though the precise origins remain debated, Ethiopia is widely recognized as the birthplace of coffee. </motion.p>

        </div>
    
    </div>
    </div>
  )
}

export default About
