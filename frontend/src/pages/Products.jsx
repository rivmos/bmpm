import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import productServices from '../services/productServices'
import CardSkeleton from '../components/skeleton/CardSkeleton'
import classNames from 'classnames'
import { useAuth } from '../context/authContext'

const ProductCard = ({ product }) => {
  const {user} = useAuth()
  return (
    <>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}

        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{product.productName}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-xl font-bold text-slate-900">{product.mainCategory}</span>
            </p>
            {/* <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.mainCategory}</span>
            </div> */}
          </div>
          <div className='flex gap-4'>
            <Link className="flex w-full items-center justify-center rounded-md bg-lightBrown px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primaryBrown focus:outline-none focus:ring-4 focus:ring-blue-300" to={`/products/${product.id}`}>
              Show
            </Link>
            {user && <Link to={`/admin/console/addproduct/${product.id}`} className="flex w-full items-center justify-center rounded-md bg-lightBrown px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primaryBrown focus:outline-none focus:ring-4 focus:ring-blue-300">
              Edit
            </Link>}
          </div>
        </div>
      </div>

    </>
  )
}

const Products = () => {
  const [products, setProducts] = useState()
  const [mainCategories, setMainCategories] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    productServices.getAllProducts().then(productsData => {
      setProducts(productsData)
    })

    productServices.getMainCategories().then(data => {
      setMainCategories([ 'All', ...data])
      setLoading(false)
    })
  }, [])


  const productsToShow = filter === 'All' ? products : products.filter(product => product.mainCategory === filter)

  if (loading) {
    const mapper = Array.from('01234567')
    return (
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12'>
        {mapper.map(item => <CardSkeleton key={item}/>)}
      </div>
    )
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='flex items-center gap-4 mb-8'>
        <i className="fa-solid fa-filter text-2xl text-yellow-700"></i>
        {mainCategories?.map(mainCategory => <span key={mainCategory.id} className={classNames('bg-lightBrown rounded-md p-2 text-white cursor-pointer', { 'bg-primaryBrown': mainCategory === filter })} onClick={() => setFilter(mainCategory)}>{mainCategory}</span>)}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          productsToShow?.map(product => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products