
import 'react';
import Logo from "../assets/Logo.png";



const Navbar =()=> {
  

  return (
    <div className='bg-amber-900 px-4 md:px-0 fixed z-50 w-full top-0 md-hidden'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
         {/* logo section */ }
        <div className='flex items-center pl-6'>
            <img src={Logo} alt="" className='w-10 h-10'/>
            <h1 className='text-2xl text-white font-cursive'> Sandro Coffee </h1>
        </div>
         {/* menu section */} 
         <nav className='md:flex items-center gap-7 pr-6'>
            <ul className='flex gap-4 items-center text-xl font-semibold text-white '>
                <a href="/"><li className='cursor-pointer font-cursive2'>Home</li></a>
                <a href="#menu"><li className='cursor-pointer font-cursive2'>Menu </li></a>
                <a href="#about"><li className='cursor-pointer font-cursive2'>About </li></a>
                <a href="#testmonial" ><li className='cursor-pointer font-cursive2'>Testmonial</li></a>
            </ul> 
            <a href="#contact"><button className='bg-amber-700 text-white hover:bg-amber-600 px-3 py-1 rounded-md pr-3 font-cursive2' >Contact</button></a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
