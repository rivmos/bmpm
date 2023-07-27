import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';


function MyDropdown() {
    const [showMainCategories, setShowMainCategories] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:9999/api/productdropdown')
            .then(res => {
                setMenuData(res.data)
            })
    }, [])
    const showCategory = (categoryName) => {
        setCategoryName(categoryName)
    }

    const showSubCategory = (categoryName) => {
        setSubCategory(categoryName)
    }

    const showProduct = (productId) => {
        axios
            .get(`http://localhost:9999/api/products/${productId}`)
            .then(res => console.log(res.data.id))
    }
    return (
        <>
            {/* <div className='flex cursor-pointer' >
                <div onClick={() => { setShowMainCategories(!showMainCategories) }} onBlur={() => { setShowMainCategories(false) }} className='hover:text-primaryBrown'>Our Products</div>
                <div onClick={() => { setShowMainCategories(true) }} onMouseLeaves={() => { setShowMainCategories(false) }}>
                    <ul style={{ display: showMainCategories ? 'block' : 'none' }} className='absolute flex flex-col gap-2 font-semibold transition-all duration-500 p-4 shadow-sm bg-lightGrey'>
                        {
                            menuData.map(item => {
                                return(
                                    <div key={item.title}>
                                        <li className='hover:text-primaryBrown' onClick={() => { showCategory(item.title) }} onMouseLeaves={() => { showCategory('') }}>{item.title}</li>
                                        <ul onClick={() => { showCategory(item.title) }} onMouseLeaves={() => { showCategory('') }} style={{ display: categoryName === item.title ? 'block' : 'none' }} className='flex flex-col gap-2 font-semibold transition-all duration-500 p-4 shadow-sm bg-white'>
                                            {
                                                item.children && item.children.map(item => {
                                                    return(
                                                        <div key={item.title}>
                                                            <li className='hover:text-primaryBrown' onClick={() => { showSubCategory(item.title) }} onMouseLeaves={() => { showSubCategory('') }}>{item.title}</li>
                                                            <ul onClick={() => { showSubCategory(item.title) }} onMouseLeaves={() => { showSubCategory('') }} style={{ display: subCategory === item.title ? 'block' : 'none' }} className='flex flex-col gap-2 font-semibold transition-all duration-500 p-4 shadow-sm bg-white'>
                                                                {
                                                                    item.children && item.children.map(item => {
                                                                        return(
                                                                            <li key={item.title} className='hover:text-primaryBrown' onClick={()=>showProduct(item.id)}>{item.title}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div> */}
            <Menu menuButton={<MenuButton>Our Products</MenuButton>}>
                {
                    menuData.map(item => {
                        return (
                            <SubMenu key={item.title} label={item.title}>
                                {
                                    item.children && item.children.map(item => {
                                        return (
                                            (item.title && <SubMenu key={item.title} label={item.title}>
                                                {
                                                    item.children && item.children.map(item => {
                                                        return (
                                                            (<MenuItem key={item.title} onClick={() => showProduct(item.id)}>
                                                                {item.title}
                                                            </MenuItem>)
                                                        )
                                                    })
                                                }
                                            </SubMenu>)
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
        </>
    )
}

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='fixed top-0 left-0 flex w-full items-center justify-around h-32 bg-white shadow-md z-50'>
                <div>
                    <Link to="/">
                        <img src='/logo.jpg' className='w-24 rounded-lg' />
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-16 font-semibold'>
                        <li><Link to='/' className='hover:text-primaryBrown'>Home</Link></li>
                        <li><Link to='/aboutus' className='hover:text-primaryBrown'>About Us</Link></li>
                        <li>
                            <MyDropdown />
                        </li>
                        <li><Link to='/testimonials' className='hover:text-primaryBrown'>Testimonials</Link></li>
                        <li><Link to='/clients' className='hover:text-primaryBrown'>Client List</Link></li>
                        <li><Link to='/contactus' className='hover:text-primaryBrown'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header