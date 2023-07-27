import React, { useState } from 'react'
import axios from 'axios'
import EnquiryAdded from '../components/EnquiryAdded'

function PageContactForm({ setOpenEnquirySuccess }) {
    const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
    const [successOpen, setSuccessOpen] = useState(false)

    const handleSubmit = () => {
        axios
            .post('http://localhost:9999/api/contact', { ...form })
            .then((res) => {
                setSuccessOpen(true)
                setForm({name: '', email: '', mobile: '', message: ''})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="max-w-7xl mx-auto py-16">
                <EnquiryAdded isOpen={successOpen} setIsOpen={setSuccessOpen} message="Enquiry Added Successfully!"/>
                <p className="text-4xl text-center text-gray-500 pb-12">
                    We are here to help you!
                </p>

                <div className='flex flex-col gap-4'>
                    <div className='w-full flex gap-8'>
                        <input placeholder='Name' className='border-[1px] border-inputBorder p-2 w-full' value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
                        <input placeholder='Email' className='border-[1px] border-inputBorder p-2  w-full' value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />
                        <input placeholder='Mobile' className='border-[1px] border-inputBorder p-2  w-full' value={form.mobile} onChange={(e) => { setForm({ ...form, mobile: e.target.value }) }} />
                    </div>
                    <div>
                        <textarea rows={5} className='border-[1px] border-inputBorder p-2 w-full' placeholder='Message' value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }) }}></textarea>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="button"
                        className="text-lightBrown border-[1px] border-lightBrown p-2 mt-10 hover:rounded-md text-base hover:bg-lightBrown hover:text-white transition-all duration-300"
                        onClick={() => { handleSubmit() }}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </>
    )
}


export default PageContactForm