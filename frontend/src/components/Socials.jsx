import React from 'react'

const Socials = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-8xl mx-auto py-4 md:py-16'>
            <a href='tel:+919216901406'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i className="fa-solid fa-phone text-2xl md:text-4xl text-lightBrown"></i>
                    <span className='text-sm md:text-base px-4'>+91 92169 01406</span>
                </div></a>
            <a href='mailto:contact@bmpackingmachines.com'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i className="fa-solid fa-envelope text-2xl md:text-4xl text-lightBrown"></i>
                    <span className='text-sm md:text-base px-4'>contact@bmpackingmachines.com</span>
                </div>
            </a>
            <a href='#'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i className="fa-brands fa-whatsapp text-2xl md:text-4xl text-lightBrown"></i>
                    <span className='text-sm md:text-base px-4'>Click To Whatsapp</span>
                </div>
            </a>
            <a href='https://www.youtube.com/@bmpackingmachines/videos' target='_blank'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i className="fa-brands fa-youtube text-2xl md:text-4xl text-lightBrown"></i>
                    <span className='text-sm md:text-base px-4'>Youtube</span>
                </div>
            </a>
        </div>
    )
}

export default Socials