import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeoroImage from './assets/heroimage.png'
import Button from './components/Button'

function App() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <div 
        className='relative w-full h-[218px] sm:h-[448px] md:h-[700px] bg-cover bg-center'
        style={{backgroundImage: `url(${HeoroImage})`}}
      >
        <div className='
          absolute pt-[24px] px-[20px] sm:px-[40px] pb-[32px] bg-[linear-gradient(to_top_right,#4DCA79,#1CBDDD)] gap-[20px] flex flex-col h-[295px] w-[375px] top-[295px]
          lg:w-[630px] lg:left-[80px]
          md:w-[622px] md:left-[60px] md:top-[354px] md:h-[306px]
          sm:w-[768px] sm:top-[525px] sm:h-[258px]
        '>
          <p className='font-[inter] text-[48px] font-bold tracking-[-0.02em] leading-[100%] text-white capitalize md:w-[556px] sm:w-[688px] w-[335px]'>We crush your competitors, goals, and sales records - without the B.S.</p>
          <Button title="Get Free Consultation" />
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App
