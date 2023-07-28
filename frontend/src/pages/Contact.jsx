import React from 'react'
import Socials from '../components/Socials'
import PageContactForm from '../forms/PageContactForm'
import NewsLetter from '../components/Newsletter'
const Contact = () => {
  return (
    <div>
      <div className='bg-about-one bg-cover'>
        <div className='text-5xl text-white h-[700px] grid place-content-center'>
          <span className='border-b-[1px] border-lightBrown'>CONTACT US</span>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center gap-6 py-16'>
        <img src='logo.jpg' className='w-24'/>
        <p className='text-2xl'>BM PACKING MACHINES</p>
        <span className='bg-lightBrown inline-block h-[1px] w-32'></span>
        <p>F 86/85/84, Industrial Area Phase 7, Mohali Punjab - 160 055</p>
      </div>
      <Socials />
      <PageContactForm />
      <NewsLetter />
    </div>
  )
}

export default Contact