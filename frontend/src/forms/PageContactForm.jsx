import React, { useState } from 'react'
import axios from 'axios'
import EnquiryAdded from '../components/EnquiryAdded'
import ButtonBorder from '../components/ButtonBorder'

function PageContactForm() {
    const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
    const [openEnquirySuccess, setOpenEnquirySuccess] = useState(false)

    const [error, setError] = useState('')
  
    const validateEnquiry = () =>{
      if(!form.name){
          return 'Name'
      }
      else if(!form.email){
          return 'Email'
      }
      else if(!form.mobile){
          return 'Mobile'
      }
      else if(!form.message){
          return 'Message'
      }
      else{
          return ''
      }
  }

    const handleSubmit = () => {
      const validationError = validateEnquiry()
      if(validationError){
        setError(`Please Provide ${validationError}`)
        setTimeout(()=>{
          setError('')
        },2000)
      }
      else{
        axios
          .post('http://localhost:9999/api/contact', {...form, product:'General'})
          .then((res) => {
            setOpenEnquirySuccess(true)
            setForm({name: '', email: '', mobile: '', message: ''})
          })
          .catch((err) => {
            const error = err.response.data.message
            console.log(error)
          })
      }
    }

    return (
        <>
            <div className="max-w-8xl mx-auto py-12 md:py-16 px-6">
                <EnquiryAdded isOpen={openEnquirySuccess} setIsOpen={setOpenEnquirySuccess} message="Enquiry Added Successfully!"/>
                <p className="text-2xl md:text-4xl text-center text-gray-500 pb-8 md:pb-12">
                    We Are Here To Help You!
                </p>
                <p className='py-2 text-red-400'>{error && error}</p>
                <div className='flex flex-col gap-4'>
                    <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8'>
                        <input placeholder='Name' className='border-[1px] border-inputBorder p-2 w-full rounded-md' value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
                        <input placeholder='Email' className='border-[1px] border-inputBorder p-2  w-full rounded-md' value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />
                        <input placeholder='Mobile' className='border-[1px] border-inputBorder p-2  w-full rounded-md' value={form.mobile} onChange={(e) => { setForm({ ...form, mobile: e.target.value }) }} />
                    </div>
                    <div>
                        <textarea rows={5} className='border-[1px] border-inputBorder p-2 w-full rounded-md' placeholder='Message' value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }) }}></textarea>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        className="text-lightBrown border-[1px] border-lightBrown p-2 mt-4 md:mt-8 hover:rounded-md text-sm sm:text-base hover:bg-lightBrown hover:text-white transition-all duration-300"
                        onClick={() => handleSubmit()}
                    >Send Message</button>
                </div>
            </div>
        </>
    )
}


export default PageContactForm