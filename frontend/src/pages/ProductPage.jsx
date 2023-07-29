import React from 'react'
import ProductInfo from '../components/ProductInfo'
import Newsletter from '../components/Newsletter'
import { useLoaderData } from 'react-router-dom'

const ProductPage = () => {

  const productInfo = useLoaderData()

  return (
    <div>
        <ProductInfo productInfo={productInfo}/>
        <Newsletter />
    </div>
  )
}

export default ProductPage