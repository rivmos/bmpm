import React, { useState } from 'react'
import ProductInfo from '../components/ProductInfo'
import Newsletter from '../components/Newsletter'
import { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import productServices from '../services/productServices'

const ProductPage = () => {
  const params = useParams()
  // const productInfo = useLoaderData()

  const [productInfo, setProductInfo] = useState()

  useEffect(()=> {
    productServices.getProduct(params.id).then(productData => setProductInfo(productData))
  },[params.id])

  console.log(params)

  return (
    <div>
        <ProductInfo productInfo={productInfo}/>
        <Newsletter />
    </div>
  )
}

export default ProductPage