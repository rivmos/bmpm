import React from 'react'
import NewsLetter from '../components/Newsletter'
import { testimonialsData } from '../data/testimonials'

const TestimonialCard = ({ clientComment, clientMessage, clientName, isGrey = false }) => {
    return (
        <div className={isGrey ? 'bg-lightGrey' : 'bg-white'}>
            <div className='max-w-4xl mx-auto py-12 px-6 flex flex-col gap-4 md:gap-8 items-center'>
                <p className='text-lightBrown text-xl md:text-2xl'>{clientComment}</p>
                <p className='text-lg md:text-2xl'>{clientMessage}</p>
                <span className='bg-lightBrown w-24 h-[1px] inline-block my-2 md:my-4'></span>
                <p className='text-lightBrown text-base md:text-lg'>{clientName}</p>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div>
            <div className='bg-about-one bg-cover mb-8 md:mb-16'>
                <div className='text-4xl md:text-5xl text-white h-[400px] md:h-[700px] grid place-content-center'>
                    <span className='border-b-[1px] border-lightBrown'>TESTIMONIALS</span>
                </div>
            </div>
            <div className='py-4 md:py-16 max-w-8xl mx-auto text-center'>
                <p className="text-2xl md:text-4xl text-gray-500 md:pb-12">
                    What Our Clients Say
                </p>
                <div className='flex flex-col gap-4  md:gap-16'>
                    {
                        testimonialsData.map((testimonial, index) => {
                            return(
                                <TestimonialCard key={testimonial.id} clientComment={testimonial.clientComment} clientMessage={testimonial.clientMessage} clientName={testimonial.clientName} clientCompanyName={testimonial.clientCompanyName} isGrey={index%2 !== 0 ? true : false}/>
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