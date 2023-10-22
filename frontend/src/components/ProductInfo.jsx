import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EnquiryForm from '../forms/EnquiryForm'
import EnquiryAdded from './EnquiryAdded'


const Heading = ({ text }) => {
  return (
    <div className='text-center text-xl md:text-2xl py-8 md:py-12'>{text.toUpperCase()}</div>
  )
}


const ProductInfo = ({ productInfo }) => {
  // const [productInfo, setProductInfo] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [openEnquirySuccess, setOpenEnquirySuccess] = useState(false)

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:9999/api/products/2')
  //     .then((res) => {
  //       setProductInfo(res.data)
  //     })
  // }, [])
  return (
    <>
      <EnquiryForm isOpen={formOpen} setIsOpen={setFormOpen} productInfo={productInfo} setOpenEnquirySuccess={setOpenEnquirySuccess} />
      <EnquiryAdded isOpen={openEnquirySuccess} setIsOpen={setOpenEnquirySuccess} message="Enquiry Added Successfully!" />
      <div className='max-w-8xl mx-auto px-6'>
        <div className='flex justify-center py-12 text-sm md:text-base'>Products / {productInfo?.mainCategory} {productInfo?.subCategory && ` / ${productInfo?.subCategory}`} / {productInfo?.productName}</div>
        {/* Display */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Display Image*/}
          <div>
            <img src={productInfo?.imageLink} />
          </div>
          {/* Display Buttons*/}
          <div className='flex flex-col justify-between gap-4 bg-lightGrey border-[1px] p-8 md:p-16 rounded-md'>
            <div className='text-3xl md:text-4xl'>
              <span>{productInfo?.productName}</span>
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <div className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1 text-sm md:text-base' onClick={() => { setFormOpen(true) }}>
                  <i className="fa-solid fa-pen-to-square text-lightBrown"></i>
                  <span>Enquire Now</span>
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <a href={productInfo?.brochureLink} target='_blank' className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1 text-sm md:text-base'>
                  <i className="fa-solid fa-file-pdf text-lightBrown"></i>
                  <span>Brochure</span>
                </a>
                <a href={productInfo?.videoLink} target='_blank' className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1 text-sm md:text-base'>
                  <i className="fa-brands fa-youtube text-lightBrown"></i>
                  <span>Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Specifications */}
        <div>
          <Heading text="MACHINE SPECIFICATIONS" />
          <div>
            <table className='border-[1px] w-full'>
              <tbody>
                {
                  productInfo?.specifications && Object.keys(productInfo?.specifications)?.map(item => {
                    return (
                      <tr className='border-y-[1px]' key={item}>
                        <th className='w-1/2 text-left border-x-[1px] p-4'>{item}:</th>
                        <td className='w-1/2 p-4'>{productInfo?.specifications[item]}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {/* Features */}
        <div>
          <Heading text="SALIENT FEATURES" />
          <div>
            <ul className='flex flex-col md:flex-row md:flex-wrap list-disc gap-4'>
              {
                productInfo?.features?.map((feature) => {
                  return <li className='flex md:w-1/2' key={feature}>{feature}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo