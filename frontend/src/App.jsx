import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeoroImage from './assets/heroimage.png'
import Button from './components/Button'
import ServiceIcon1 from './assets/serviceicon1.png'
import ServiceIcon2 from './assets/serviceicon2.png'
import Accordion from './components/Accordion'


function App() {
  const faqItems = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
  ];
  return (
    <>
      <Navbar />

      {/* Hero Section*/}
      <div
        className='hidden md:block relative w-full h-[700px] bg-cover bg-center'
        style={{ backgroundImage: `url(${HeoroImage})` }}
      >
        <div
          className='absolute pt-[24px] px-[20px] md:px-[60px] pb-[32px]
            bg-[linear-gradient(to_top_right,#4DCA79,#1CBDDD)] gap-[20px]
            flex flex-col h-[306px] w-[622px] md:left-[60px] md:top-[354px]
            lg:w-[630px] lg:left-[80px]'
        >
          <p className='font-[inter] text-[48px] font-bold tracking-[-0.02em] leading-[100%] text-white capitalize w-[556px]'>
            We crush your competitors, goals, and sales records - without the B.S.
          </p>
          <Button title="Get Free Consultation" />
        </div>
      </div>

      <div className="block md:hidden w-full">
        <img
          src={HeoroImage}
          alt="Hero"
          className="w-full h-auto object-cover"
        />
        <div className='
          w-full bg-[linear-gradient(to_top_right,#4DCA79,#1CBDDD)]
          flex flex-col gap-[20px] p-[24px] sm:p-[40px]
        '>
          <p className='font-[inter] text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[110%] text-white capitalize'>
            We crush your competitors, goals, and sales records - without the B.S.
          </p>
          <Button title="Get Free Consultation" />
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full flex flex-col items-center 
        px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[188px]
        py-[60px] sm:py-[80px] md:py-[100px]
        gap-[100px] sm:gap-[120px] md:gap-[140px]"
      >

        <div
          className="
            flex flex-col md:flex-row items-center justify-between
            gap-[60px] sm:gap-[80px] md:gap-[108px]
            w-full md:max-w-[1064px]
          "
        >
          <img
            src={ServiceIcon1}
            alt='Web & Mobile App'
            className='w-[220px] sm:w-[300px] md:w-[414px] h-auto md:h-[414px]'
          />
          <div className='text-center md:text-left max-w-[335px] sm:max-w-[688px] md:max-w-[556px]'>
            <h2 className='text-[#4F46E5] text-[20px] sm:text-[24px] font-bold mb-[12px]'>
              Web & Mobile App Development
            </h2>
            <p className='text-gray-600 text-[14px] sm:text-[16px] mb-[20px] leading-relaxed'>
              Your web and mobile apps are pieces of the puzzle to grow your business.
              We use frameworks which tailor content and engagement methods to respond
              to different interests shown by your potential customers who interact with
              your business online.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button title='Learn More' />
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col-reverse md:flex-row items-center justify-between
            gap-[60px] sm:gap-[80px] md:gap-[108px]
            w-full md:max-w-[1064px]
          "
        >
          <div className='text-center md:text-left max-w-[335px] sm:max-w-[688px] md:max-w-[556px]'>
            <h2 className='text-[#4F46E5] text-[20px] sm:text-[24px] font-bold mb-[12px]'>
              Digital Strategy Consulting
            </h2>
            <p className='text-gray-600 text-[14px] sm:text-[16px] mb-[20px] leading-relaxed'>
              Your digital strategy should complement the overall marketing strategy
              of the company. In online marketing, each component we work with in
              conjunction and every business needs a different mix. We provide a clear
              concept and strategic overview to find the most efficient model for your business.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button title='Learn More' />
            </div>
          </div>
          <img
            src={ServiceIcon2}
            alt='Digital Strategy Consulting'
            className='w-[200px] sm:w-[240px] md:w-[414px] h-auto md:h-[414px]'
          />
        </div>
      </div>

      {/* --- FAQ Section --- */}
      <div className="text-center mb-20">
        <h2 className="text-[#4F46E5] text-xl font-semibold mb-6 ">
          Frequently asked questions
        </h2>
        <Accordion items={faqItems} />
      </div>

      <Footer />
    </>
  )
}

export default App
