
import 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import './index.css';

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Menu/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
