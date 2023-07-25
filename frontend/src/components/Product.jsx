import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EnquiryForm from '../forms/EnquiryForm'
import EnquiryAdded from './EnquiryAdded'


const Heading = ({ text }) => {
  return (
    <div className='text-center text-2xl py-12'>{text.toUpperCase()}</div>
  )
}


const Product = () => {
  const [productInfo, setProductInfo] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [openEnquirySuccess, setOpenEnquirySuccess] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:9999/api/products/2')
      .then((res) => {
        setProductInfo(res.data)
      })
  }, [])
  return (
    <div className='max-w-7xl mx-auto mt-32'>
      <EnquiryForm isOpen={formOpen} setIsOpen={setFormOpen} productInfo={productInfo} setOpenEnquirySuccess={setOpenEnquirySuccess} />
      <EnquiryAdded isOpen={openEnquirySuccess} setIsOpen={setOpenEnquirySuccess} message="Success" />
      <div className='flex justify-center py-12'>Products / {productInfo.mainCategory} {productInfo.subCategory && ` / ${productInfo.subCategory}`} / {productInfo?.productName}</div>
      {/* Display */}
      <div className='grid grid-cols-2 gap-8 mx-10'>
        {/* Display Image*/}
        <div>
          <img src={productInfo.imageLink} />
        </div>
        {/* Display Buttons*/}
        <div className='flex flex-col justify-between gap-4 bg-lightGrey border-[1px] p-16'>
          <div className='text-4xl'>
            <span>{productInfo.productName}</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <div className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1' onClick={() => { setFormOpen(true) }}>
                <i class="fa-solid fa-pen-to-square text-lightBrown"></i>
                <span>Enquire Now</span>
              </div>
            </div>
            <div className='flex gap-4 justify-center'>
              <a href={productInfo.brochureLink} target='_blank' className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1'>
                <i class="fa-solid fa-file-pdf text-lightBrown"></i>
                <span>Brochure</span>
              </a>
              <a href={productInfo.videoLink} target='_blank' className='text-lightBrown border-[2px] border-lightBrown p-2 cursor-pointer flex justify-center w-full items-center gap-1'>
                <i class="fa-brands fa-youtube text-lightBrown"></i>
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
          {/* <table>
            <tbody>
              {
                Object.keys(productInfo?.specifications)?.map(item => {
                  return (
                    <tr>
                      <th>{item}:</th>
                      <td>{productInfo?.specifications[item]}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> */}
        </div>
      </div>
      {/* Features */}
      <div>
        <Heading text="SALIENT FEATURES" />
        <div>
          <ul className='flex flex-wrap list-disc'>
            {
              productInfo?.features?.map((feature) => {
                return <li className='flex w-1/2' key={feature}>{feature}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Product