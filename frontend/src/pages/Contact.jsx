import React from 'react'
import Socials from '../components/Socials'
import PageContactForm from '../forms/PageContactForm'
import NewsLetter from '../components/Newsletter'
const Contact = () => {
  return (
    <div>
      <div className='bg-about-one bg-cover'>
        <div className='text-5xl text-white h-[400px] md:h-[700px] grid place-content-center'>
          <span className='border-b-[1px] border-lightBrown'>CONTACT US</span>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center gap-6 py-12 md:py-16 px-6'>
        <img src='logo.jpg' className='w-24'/>
        <p className='text-xl md:text-2xl'>BM PACKING MACHINES</p>
        <span className='bg-lightBrown inline-block h-[1px] w-32'></span>
        <p className='text-center'>F 86/85/84, Industrial Area Phase 7, Mohali Punjab - 160 055</p>
      </div>
      <Socials />
      <PageContactForm />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.984715678544!2d76.68910461554357!3d30.71883008164199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeb000000001%3A0xb6f5631271db613b!2sB.%20M.%20Packing%20Machines!5e0!3m2!1sen!2sin!4v1676011234168!5m2!1sen!2sin" width="100%" height="450"></iframe>
      <NewsLetter />
    </div>
  )
}

export default Contact