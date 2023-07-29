import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Products = () => {
  const products = useLoaderData()

  return (
    <div>
      {
        products.map(item => {
          return(
            <Link key={item.id} to={`${item.id}`}>One</Link>
          )
        })
      }
    </div>
  )
}

export default Products