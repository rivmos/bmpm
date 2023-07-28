import React from 'react'
import { Menu } from '@headlessui/react'

const Footer = () => {
    return (
        <div className='bg-darkGrey text-white'>
            <div className='max-w-8xl flex flex-col mx-auto py-12 gap-4'>
                {/* Sections */}
                <div className='grid grid-cols-4'>
                    <div className='flex flex-col gap-4 col-span-2'>
                        {/* Headline */}
                        <div className='text-2xl font-semibold'>Our Products</div>
                        <div className='bg-lightBrown h-[2px] w-16'></div>
                        <div>
                            <ul className='flex flex-wrap'>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Wrapping Machine</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Automatic Binding Machine</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Flow Wrap</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Over Wrapping</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Conveyor</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Bar Cutter</span></li>
                                <li className='w-1/2'><span className='hover:text-lightBrown cursor-pointer'>Diverter</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-semibold'>Navigate</div>
                        <div className='bg-lightBrown h-[2px] w-16'></div>
                        <ul className='flex flex-col gap-1'>
                            <li><a href='/' className='hover:text-lightBrown'>Home</a></li>
                            <li><a href='/' className='hover:text-lightBrown'>About Us</a></li>
                            <li><a href='/' className='hover:text-lightBrown'>Our Products</a></li>
                            <li><a href='/' className='hover:text-lightBrown'>Testimonials</a></li>
                            <li><a href='/' className='hover:text-lightBrown'>Client List</a></li>
                            <li><a href='/' className='hover:text-lightBrown'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-semibold'>Company</div>
                        <div className='bg-lightBrown h-[2px] w-16'></div>
                        <div className='flex flex-col gap-2'>
                            <span className='hover:text-lightBrown cursor-pointer'>Privacy</span>
                            <span className='hover:text-lightBrown cursor-pointer'>Disclaimer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center py-10 text-black bg-lightGrey'>
                <span>&copy; 2023 BM Packing Machines</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer

