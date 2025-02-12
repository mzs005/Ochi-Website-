import React from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
 
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
