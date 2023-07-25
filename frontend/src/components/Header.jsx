import React, { useState } from 'react'


function MyDropdown() {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            <div className='flex cursor-pointer'>
                <div onMouseEnter={() => { setShowDropDown(true) }} onMouseLeave={() => { setShowDropDown(false) }} className='hover:text-primaryBrown'>Our Products</div>
                <div onMouseEnter={() => { setShowDropDown(true) }} onMouseLeave={() => { setShowDropDown(false) }}>
                    <ul style={{ display: showDropDown ? 'block' : 'none' }} className='absolute flex flex-col gap-2 font-semibold transition-all duration-500 p-4 shadow-sm bg-white'>
                        <li className='hover:text-primaryBrown'>Wrapping Machine</li>
                        <li className='hover:text-primaryBrown'>Automatic Binding Machine</li>
                        <li className='hover:text-primaryBrown'>Flow Wrap</li>
                        <li className='hover:text-primaryBrown'>Over Wrapping</li>
                        <li className='hover:text-primaryBrown'>Conveyor</li>
                        <li className='hover:text-primaryBrown'>Bar Cutter</li>
                        <li className='hover:text-primaryBrown'>Diverter</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='fixed top-0 left-0 flex w-full items-center justify-around h-32 bg-white shadow-md'>
                <div>
                    <img src='/logo.jpg' className='w-24 rounded-lg' />
                </div>
                <div>
                    <ul className='flex gap-16 font-semibold'>
                        <li><a href='/' className='hover:text-primaryBrown'>Home</a></li>
                        <li><a href='/' className='hover:text-primaryBrown'>About Us</a></li>
                        <li>
                            <MyDropdown />
                        </li>
                        <li><a href='/' className='hover:text-primaryBrown'>Testimonials</a></li>
                        <li><a href='/' className='hover:text-primaryBrown'>Client List</a></li>
                        <li><a href='/' className='hover:text-primaryBrown'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header