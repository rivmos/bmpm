import React from 'react'
import NewsLetter from '../components/Newsletter'

const MapStateName = ({text}) => <li><span className='border-b-[1px] border-lightBrown'>{text}</span></li>
const CompanyName = ({text}) => <div className='bg-lightGrey p-12 text-center'>{text}</div>
const StateName = ({text}) => <div className='text-center mb-12 mt-32 text-3xl font-semibold'>{text}</div>

const Clients = () => {
    return (
        <div>
            <div className='bg-about-one'>
                <div className='text-5xl text-white h-[700px] grid place-content-center'>
                    <span className='border-b-[1px] border-lightBrown'>CLIENT LIST</span>
                </div>
            </div>
            <div className='max-w-3xl mx-auto text-center py-28'>
                <p className='text-4xl mb-4'>BM Packing</p>
                <p className='text-4xl text-lightBrown'>PROVIDE SERVICES UP TO <span className='font-semibold'>164 CLIENTS</span> ACROSS INDIA</p>
            </div>
            <div className='max-w-[1500px] py-36 px-48 mx-auto bg-lightGrey grid grid-cols-2 relative'>
                <div>
                    <ul className='flex flex-col gap-4 text-2xl font-semibold'>
                        <MapStateName text="ANDHRA PRADESH"/>
                        <MapStateName text="CHATTISGARH"/>
                        <MapStateName text="NEW DELHI"/>
                        <MapStateName text="GUJARAT"/>
                    </ul>
                </div>
                <div></div>
                <img src='/images/map.png' className='absolute right-0 -top-20'/>
            </div>
            <div className='max-w-[1500px] mx-auto py-32'>
                <StateName text="ANDHRA PRADESH" />
                <div className='grid grid-cols-3 gap-8'>
                    <CompanyName text="Kudrat Soap Products"/>
                    <CompanyName text="Meman detergent"/>
                    <CompanyName text="Ashirwad Chemicals"/>
                    <CompanyName text="Kanha Detergent Pvt Ltd"/>
                    <CompanyName text="International Traders"/>
                    <CompanyName text="Deccan Soap Factory"/>
                </div>

                <StateName text="NEW DELHI" />
                <div className='grid grid-cols-3 gap-8'>
                    <CompanyName text="Ashirwad Chemicals"/>
                    <CompanyName text="Deccan Soap Factory"/>
                    <CompanyName text="Kanha Detergent Pvt. Ltd."/>
                </div>

                <StateName text="GUJARAT" />
                <div className='grid grid-cols-3 gap-8'>
                    <CompanyName text="Meman detergent"/>
                    <CompanyName text="Kudrat Soap Products"/>
                    <CompanyName text="International Traders"/>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default Clients