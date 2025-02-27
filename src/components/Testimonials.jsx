
import { motion } from 'framer-motion';
import 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TestimonialsDate =[{
    id:1,
    name:"Ritay",
    text:" hey its ritay , nice to have you here",
    img:"https://picsum.photos/101/101",


},
{
    id:2,
    name:"Ariya",
    text:" hey its Ariya , nice to have you here",
    img:"https://picsum.photos/102/102",


},
{
    id:3,
    name:"Narsy",
    text:" hey its Narsy , nice to have you here",
    img:"https://picsum.photos/104/104",


},
{
    id:5,
    name:"Ayan",
    text:" hey its Ayan , nice to have you here",
    img:"https://picsum.photos/103/103",


},

];


const Testimonials = () => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                     slidesToShow:3,
                     slidesToScroll:1,
                     infinite:true,
                }
            },
            {
                breakpoint:1024,
                settings:{
                     slidesToShow:2,
                     slidesToScroll:1,
                     initialSlide:2,
                }
            },
            {
                breakpoint:640,
                settings:{
                     slidesToShow:1,
                     slidesToScroll:1,
                     
                }
            }
        ]
      };
  return (
    <div id='testmonial' className='py-40'>
        <div className='max-w-7xl mx-auto'>
            {/* header section */   }
            <div className='mb-10'>
            <motion.h1
               initial={{opacity:0,y:100}}
               whileInView={{opacity:1,y:0}}
               transition={{duration:1.5,delay:0.5}}
            className='text-center text-amber-900 font-bold  text-4xl font-cursive'>Testimonial</motion.h1>
            </div>
            {/*Testimonials carts */}
            <motion.div
              initial={{opacity:0,scale:0.5}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:1.5,delay:0.5}}
            >
 <Slider {...settings}>
        {TestimonialsDate.map((data) =>(
            // eslint-disable-next-line react/jsx-key
            <div className='my-6'>
                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                bg-amber-900/10 realtive '>
                    <div className='mb-4'>
                        <img src={data.img} alt= "" className='rounded-full w-20 h-20 '/>    
                    </div>
                    {/*content section  */}
                    <div className='flex flex-col items-center  gap-4'>
                        <div className='space-y-3'>
                            <p className='text-xs text-gray-500'>{data.text}</p>
                            <h1 className='text-xl font-bold text-black/80 font-cursive2 '>{data.name}</h1>
                        </div>

                    </div>
                    <p className='text-amber-900/20 text-0xl font-serif absolute top-0 right-0'>``</p>
                </div>
            </div>
        ))} 
  </Slider>
            </motion.div>
        </div>
   
  </div>
   
  )
}

export default Testimonials
