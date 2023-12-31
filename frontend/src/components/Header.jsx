import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import productServices from '../services/productServices';
import { useLocation } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import { color, motion } from 'framer-motion';
import { useAuth } from '../context/authContext';
import classNames from 'classnames';


function MyDropdown() {
    const [showMainCategories, setShowMainCategories] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [menuData, setMenuData] = useState([])
    const location = useLocation()
    useEffect(() => {
        productServices.getDropDownData().then(dropDownData => {
            setMenuData(dropDownData)
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
            <Menu menuButton={<MenuButton className="flex items-center gap-2">Our Products<i className="fa-solid fa-angle-down mt-[2px]"></i></MenuButton>}>
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
                                                            (
                                                                <Link key={item.title} to={`/products/${item.id}`}>
                                                                    <MenuItem >
                                                                        {item.title}
                                                                    </MenuItem>
                                                                </Link>
                                                            )
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

const AdminMenu = () => {
    const [adminMenuSelection, setAdminMenuSelection] = useState('Admin')
    const menuItems = ['Add Product', 'Enquiries', 'Subscribers']

    return (
        <>
            <Menu menuButton={<MenuButton className="flex items-center gap-2">{adminMenuSelection}<i className="fa-solid fa-angle-down mt-[2px]"></i></MenuButton>}>
                {menuItems.map(item => {
                    return (
                        <Link to={`admin/console/${item.toLowerCase().replace(/\s/g, '')}`}>
                            <MenuItem onClick={() => setAdminMenuSelection(item)} className={classNames({'text-primaryBrown':item === adminMenuSelection})}>
                                {item}
                            </MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </>
    )
}

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate()
    const { setUser } = useAuth()

    const handleSignOut = () => {
        sessionStorage.removeItem('token')
        navigate('/')
        setUser(null)
    }
    return (
        <div className='hidden sm:block fixed top-0 left-0 w-full bg-white z-50 shadow-md'>
            <div className='flex items-center max-w-8xl mx-auto justify-between h-32'>
                <div>
                    <Link to="/">
                        <motion.img animate={{ y: [-200, 0] }} transition={{ type: "spring" }} src='/logo.jpg' className='w-24 rounded-full' />
                        {/* <img /> */}
                    </Link>
                </div>
                <div>
                    <ul className='flex md:gap-8 lg:gap-10 xl:gap-16 font-semibold'>
                        <li><Link to='/' className='hover:text-primaryBrown' style={{ color: location.pathname === '/' && '#914a0e' }}>Home</Link></li>
                        <li><Link to='/aboutus' className='hover:text-primaryBrown' style={{ color: location.pathname === '/aboutus' && '#914a0e' }}>About Us</Link></li>
                        <li>
                            <MyDropdown />
                        </li>
                        <li><Link to='/testimonials' className='hover:text-primaryBrown' style={{ color: location.pathname === '/testimonials' && '#914a0e' }}>Testimonials</Link></li>
                        <li><Link to='/clients' className='hover:text-primaryBrown' style={{ color: location.pathname === '/clients' && '#914a0e' }}>Client List</Link></li>
                        <li><Link to='/contactus' className='hover:text-primaryBrown' style={{ color: location.pathname === '/contactus' && '#914a0e' }}>Contact Us</Link></li>
                        {isLoggedIn && <li><Link to='/admin/console' >Console</Link></li>}
                        {isLoggedIn && <li onClick={handleSignOut} className='hover:text-primaryBrown cursor-pointer'>Logout</li>}
                        {isLoggedIn && <AdminMenu className='hover:text-primaryBrown' style={{ color: location.pathname === '/admin/console' && '#914a0e' }} />}
                        {/* {!isLoggedIn && <li><Link to='/login' className='hover:text-primaryBrown' style={{ color: location.pathname === '/login' && '#914a0e' }}>Admin</Link></li>} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
