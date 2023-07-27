import React, { useState } from 'react'
import axios from 'axios'
import EnquiryAdded from './EnquiryAdded'

const Newsletter = () => {
    const [form, setForm] = useState({ email: '' })
    const [openNewsletterSuccess, setNewsLetterSuccess] = useState(false)

    const handleSubscribe = () => {
        axios
            .post('http://localhost:9999/api/subscribe', form)
            .then(() => {
                setNewsLetterSuccess(true)
                setForm({ email: '' })
            })
    }
    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return anime.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                return anime.from(data.next.container, {
                    opacity: 0
                });
            }
        }]
    });
    return (
        <div className='max-w-7xl flex flex-col gap-8 items-center mx-auto py-32' data-barba="wrapper">
            <EnquiryAdded isOpen={openNewsletterSuccess} setIsOpen={setNewsLetterSuccess} message="Success" />
            <div className='text-center'  data-barba="container">
                <p className='text-2xl mb-3'>Newsletter Sign Up</p>
                <p className='text-xl'>STAY TUNED FOR OUR UPDATES</p>
            </div>
            <div className='border-[1px]'>
                <input placeholder='Your E-mail ID' className='p-2 w-96' value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />
                <button className='px-8 py-2 bg-lightBrown text-white' onClick={handleSubscribe}>Subscribe</button>
            </div>
            <div className='flex gap-1 items-center'>
                <input type='checkbox' className='cursor-pointer accent-lightBrown' />
                <span>I have read and agree to the Terms & Conditions</span>
            </div>
        </div>
    )
}

export default Newsletter