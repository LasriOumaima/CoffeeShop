import  'react'
import Bg from '../assets/bbz.jpg'
import { motion } from 'framer-motion'


const bgImage ={
      backgroundImage: `url(${Bg})`,
      bacgroundcolor: "#270c03",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height:"100%",
      width:"100%",

};
const Contact = () => {
  return (
    <div id='contact' style={bgImage}   className='min-h-screen flex items-center justify-center p-6'>
     <motion.div
     initial={{opacity:0,y:100}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:1.5,delay:0.5}}
     className='w-full max-w-3xl bg-amber-900/20 rounded-lg shadow-md p-8' >
        <h1 className='text-3xl font-bold text-center text-white mb-6 font-cursive'>Contact Us </h1>
          <p className='text-center text-lg text-gray-300 mb-8 font-cursive'>We would like to hear from you ! fill out the below form </p>  
       <form className='space-y-6' >
        <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>Name</label>
            <input type='text' id='name' name='name' placeholder='Your Name'
            className='w-full px-4 py-2 border borde-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900'></input>
        </div>
        <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
            <input type='email' id='email' name='email' placeholder='Your Email'
          className='w-full px-4 py-2 border borde-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900'></input>
        </div>
        <div>
        <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
        <textarea name='message' id='message' placeholder='Your Message' rows="5" className='w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900  '></textarea>
        </div>
        <button className='w-full py-2 px-4 bg-amber-900 text-white font-semibold rounded-lg shadow-md hover:bg-amber-950 transition duration-300  '>Send Message</button>
       </form>
       <div className='mt-8 text-center'>
        <p className='text-gray-300'>On reach us directly :</p>
        <p className='font-semibold text-white' > +1 (123) 456-789</p>
        <p className='font-semibold text-white' >info@coffeewebsite.com</p>

       </div>
      </motion.div> 
      
    </div>
  )
}

export default Contact
