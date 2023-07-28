import React from 'react'
import NewsLetter from '../components/Newsletter'
import { testimonialsData } from '../data/testimonials'

const TestimonialCard = ({ clientComment, clientMessage, clientName, isGrey = false }) => {
    return (
        <div className={isGrey ? 'bg-lightGrey' : 'bg-white'}>
            <div className='max-w-4xl mx-auto py-12 flex flex-col gap-8 items-center'>
                <p className='text-lightBrown text-2xl'>{clientComment}</p>
                <p className='text-2xl'>{clientMessage}</p>
                <span className='bg-lightBrown w-24 h-[1px] inline-block my-4'></span>
                <p className='text-lightBrown text-lg'>{clientName}</p>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div>
            <div className='bg-about-one bg-cover'>
                <div className='text-5xl text-white h-[700px] grid place-content-center'>
                    <span className='border-b-[1px] border-lightBrown'>TESTIMONIALS</span>
                </div>
            </div>
            <div className='my-32 max-w-8xl mx-auto text-center'>
                <p className="text-4xl text-gray-500 pb-12">
                    What our clients say
                </p>
                <div className='flex flex-col gap-16'>
                    {
                        testimonialsData.map((testimonial, index) => {
                            return(
                                <TestimonialCard clientComment={testimonial.clientComment} clientMessage={testimonial.clientMessage} clientName={testimonial.clientName} clientCompanyName={testimonial.clientCompanyName} isGrey={index%2 !== 0 ? true : false}/>
                            )
                        })
                    }
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default Testimonials