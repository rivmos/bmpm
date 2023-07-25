import React from 'react'
import { Menu } from '@headlessui/react'

const Footer = () => {
    return (
        <div className='bg-red-100'>
            <div className='max-w-7xl flex flex-col mx-auto'>
                <div className='bg-red-900'>Our Products</div>
                {/* Headline */}
                {/* Sections */}
                <div className='grid grid-cols-4'>
                    <div className='col-span-2'>
                        <ul>
                            <li>Wrapping Machine</li>
                            <li>Automatic Binding Machine</li>
                            <li>Flow Wrap</li>
                            <li>Over Wrapping</li>
                            <li>Conveyor</li>
                            <li>Bar Cutter</li>
                            <li>Diverter</li>
                        </ul>
                    </div>

                    <div>
                        <ul className='flex flex-col gap-2 font-semibold'>
                            <li><a href='/' className='hover:text-primaryBrown'>Home</a></li>
                            <li><a href='/' className='hover:text-primaryBrown'>About Us</a></li>
                            <li><a href='/' className='hover:text-primaryBrown'>Our Products</a></li>
                            <li><a href='/' className='hover:text-primaryBrown'>Testimonials</a></li>
                            <li><a href='/' className='hover:text-primaryBrown'>Client List</a></li>
                            <li><a href='/' className='hover:text-primaryBrown'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <a>Privacy</a>
                        <a>Disclaimer</a>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <span>&copy; 2023 BM Packing Machines</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

