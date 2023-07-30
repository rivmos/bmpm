import React from 'react'
import NewsLetter from '../components/Newsletter'
const About = () => {
  return (
    <div>
      <div className='bg-about-one bg-cover'>
        <div className='text-5xl text-white h-[400px] md:h-[700px] grid place-content-center'>
          <span className='border-b-[1px] border-lightBrown'>ABOUT US</span>
        </div>
      </div>
      <div className='flex flex-col gap-2 md:gap-4 max-w-4xl text-center mx-auto px-6 py-12 md:py-16'>
        <p className='text-2xl md:text-4xl'>
          BM Packing Solutions
        </p>
        <p className='text-2xl md:text-4xl text-lightBrown'>
          WE ARE INOVATIVE
        </p>
        <p className='mt-4 text-sm sm:text-base'>
          BM Packing – a company with deep rooted relationships was started by a young and energetic entrepreneur in 2006.
          Since its birth BM has grown hard to reach an enviable position among the multi talented business house in the machine industry
        </p>
        <p className='mt-4 text-sm sm:text-base'>
          Our commitment towards quality has always been the driving force behind its success and growth since its inception, and it
          continues to be the guideline into the future endeavors.
        </p>

      </div>

      <div className='grid grid-cols-3 max-w-8xl mx-auto gap-4 px-6'>
        <div className='col-span-2'>
          <img src='/images/ab-3.jpg' className='h-full'/>
        </div>
        <div className='col-span-1'>
          <img src='/images/ab-3.jpg' className='mb-4' />
          <img src='/images/ab-3.jpg' />
        </div>
      </div>

      <div className='flex flex-col gap-6 md:gap-8 max-w-8xl md:text-center mx-auto py-12 md:py-16 text-sm sm:text-base md:text-lg px-6'>
        <p>
          Through innovative design and superb craftsmanship, we are continually expanding our range of speciality products day after day.
        </p>
        <p>
          Today we are high end machines manufacturer with specialisation in HFFS, VFFS, Circular form fill and seal machines, detergent cake & toilet soap wrapping machines, carton erecting-filling-sealing machine and much more.
        </p>
        <p>
          The company is fully equipped with the latest and best of line automated machines supported by in-house testing and quality assurance facilities to produce products. solutions from time to time to its customers but also maintain long term relationships.
        </p>
        <p className='text-lightBrown border-[2px] border-lightBrown mt-4 md:mt-12 p-8 md:p-12 text-base md:text-2xl'>
          We can proudly say that our machines achieve excellent operation characteristics, energy efficiency and user friendly, and comes with a lot of advantages for our buyers.
        </p>
      </div>
      <div className='bg-about-two h-[400px] md:h-[500px] bg-cover'>

      </div>
      <NewsLetter />
    </div>
  )
}

export default About