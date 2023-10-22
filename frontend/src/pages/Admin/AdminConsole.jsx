import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminConsole = () => {

    return (
        <>
            <div className='mx-auto'>
                <div className="bg-gradient-to-r from-lightBrown to-primaryBrown h-screen">
                    <div className="flex flex-col h-full justify-center items-center text-white">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold mb-4">Welcome, Admin!</h1>
                            <p className="text-lg mb-8">Manage your dashboard with ease.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link
                                to="/admin/console/addproduct"
                                className="bg-white text-primaryBrown px-6 py-3 rounded-full hover:bg-lightBrown hover:text-white transition duration-300 ease-in-out"
                            >
                                Add Product
                            </Link>
                            <Link
                                to="/admin/console/enquiries"
                                className="bg-white text-primaryBrown px-6 py-3 rounded-full hover:bg-lightBrown hover:text-white transition duration-300 ease-in-out"
                            >
                                Enquiries
                            </Link>
                            <Link
                                to="/admin/console/subscribers"
                                className="bg-white text-primaryBrown px-6 py-3 rounded-full hover:bg-lightBrown hover:text-white transition duration-300 ease-in-out"
                            >
                                Subscribers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminConsole