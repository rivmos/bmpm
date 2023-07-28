import React from 'react'

const Socials = () => {
    return (
        <div className='grid grid-cols-4 gap-4 justify-center max-w-8xl mx-auto py-16'>
            <a href='tel:+919216901406'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i class="fa-solid fa-phone text-4xl text-lightBrown"></i>
                    +91 92169 01406
                </div></a>
            <a href='mailto:contact@bmpackingmachines.com'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i class="fa-solid fa-envelope text-4xl text-lightBrown"></i>
                    contact@bmpackingmachines.com
                </div>
            </a>
            <a href='#'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i class="fa-brands fa-whatsapp text-4xl text-lightBrown"></i>
                    Click To Whatsapp
                </div>
            </a>
            <a href='https://www.youtube.com/@bmpackingmachines/videos' target='_blank'>
                <div className='bg-lightGrey py-16 flex flex-col gap-4 text-center'>
                    <i class="fa-brands fa-youtube text-4xl text-lightBrown"></i>
                    Youtube
                </div>
            </a>
        </div>
    )
}

export default Socials