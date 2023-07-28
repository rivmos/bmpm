import React from 'react'
import NewsLetter from '../components/Newsletter'

const TestimonialCard = ({ clientComment, clientMessage, clientInfo, isGrey=false }) => {
    return (
        <div className={isGrey ? 'bg-lightGrey' : 'bg-white'}>
            <div className='max-w-4xl mx-auto py-12 flex flex-col gap-8 items-center'>
                <p className='text-lightBrown text-2xl'>{clientComment}</p>
                <p className='text-2xl'>{clientMessage}</p>
                <span className='bg-lightBrown w-24 h-[1px] inline-block my-4'></span>
                <p className='text-lightBrown text-lg'>{clientInfo}</p>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div>
            <div className='bg-about-one'>
                <div className='text-5xl text-white h-[700px] grid place-content-center'>
                    <span className='border-b-[1px] border-lightBrown'>TESTIMONIALS</span>
                </div>
            </div>
            <div className='my-32 max-w-8xl mx-auto text-center'>
                <p className="text-4xl text-gray-500 pb-12">
                    What our clients say
                </p>
                <div className='flex flex-col gap-16'>
                    <TestimonialCard clientComment="EXTREMELY SATISFIED" clientMessage="We are extremely satisfied with the next-gen solutions we have received from BM Packing. With their pioneering innovation, extensive domain knowledge and competency in the products, we have been able to deliver exceptionally well." clientInfo="MR. RAKESH SHARMA - ASHIRWAD CHEMICALS" />
                    <TestimonialCard clientComment="FULLY AUTOMATED MACHINES" clientMessage="BM Packing has offered us automated and reliable packing machines. We really recommend them for their well structured, reliable products backed by dependable services." clientInfo="MR. SHASHIDHARAN - KUDRAT SOAP PRODUCTS" isGrey={true} />
                    <TestimonialCard clientComment="QUALITY SOLUTIONS" clientMessage="We have been associated with BM Packing for a very long time and their high end machines are fully capable with specialisation in HFFS, VFFS which assures quality solutions from time to time. We are very satisfied with the quality products we have received from BM Packing." clientInfo="MS. PAYEL PATEL - MEMAN DETERGENT" />
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default Testimonials