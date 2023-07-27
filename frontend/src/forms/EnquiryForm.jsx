import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'

function EnquiryForm({ isOpen, setIsOpen, productInfo, setOpenEnquirySuccess}) {
    const [form, setForm] = useState({name:'',email:'',mobile:'',message:''})
  
    const handleSubmit = () => {
      axios
        .post('http://localhost:9999/api/contact', {...form, productName:productInfo.productName})
        .then((res) => {
          setOpenEnquirySuccess(true)
          setForm({name: '', email: '', mobile: '', message: ''})
        })
        .catch((err) => {
          console.log(err)
        })
    }
  
    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-4xl font-medium leading-6 text-gray-900"
                    >
                      ENQUIRE NOW
                    </Dialog.Title>
                    <p className="text-base text-gray-500 py-8">
                      If you have any quereis kindly take a moment to fill up this form, our representatives will contact you shortly.
                    </p>
  
                    <div className='flex flex-col gap-4'>
                      <input placeholder='Name' className='border-[1px] p-2' value={form.name} onChange={(e)=>{setForm({...form,name:e.target.value})}}/>
                      <input placeholder='Email' className='border-[1px] p-2' value={form.email} onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
                      <input placeholder='Mobile' className='border-[1px] p-2' value={form.mobile} onChange={(e)=>{setForm({...form,mobile:e.target.value})}}/>
                      <input value={productInfo.productName} className='border-[1px] p-2' readOnly/>
                      <textarea rows={5} className='border-[1px] p-2' placeholder='Message' value={form.message} onChange={(e)=>{setForm({...form,message:e.target.value})}}></textarea>
                    </div>
  
                    <div className="flex justify-end gap-4 mt-4">
                      <button
                        type="button"
                        className="text-lightBrown border-[1px] border-lightBrown p-2 rounded-md text-base hover:bg-lightBrown hover:text-white transition-colors duration-300"
                        onClick={() => { setIsOpen(false);handleSubmit()}}
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        className="text-lightBrown border-[1px] border-lightBrown p-2 rounded-md text-base hover:bg-lightBrown hover:text-white transition-colors duration-300"
                        onClick={() => { setIsOpen(false) }}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }


  export default EnquiryForm