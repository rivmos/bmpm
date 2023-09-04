import React, { useState } from 'react'
import SubscribersList from './SubscribersList'
import EnquiryLists from './EnquiryList'
import AddProduct from './AddProduct'

const ViewDisplay = ({viewName}) => {
    if(viewName === 'Subscriber'){
        return(
            <>
                <SubscribersList />
            </>
        )
    }
    if(viewName === 'Product'){
        return(
            <>
                <AddProduct />
            </>
        )
    }

    if(viewName === 'Enquiry'){
        return(
            <>
                <EnquiryLists />
            </>
        )
    }
}

const AdminConsole = () => {
    const [viewName, setViewName] = useState('Product')

    return(
        <>
        <div className='max-w-8xl mx-auto'>
            <div className='flex gap-4 py-4'>
                <button className='bg-gray-200 p-2 rounded-md' style={{backgroundColor:viewName === 'Product' ? 'Gray' : 'White',color:viewName === 'Product' ? 'White' : 'Black'}} onClick={() => setViewName('Product')}>Add Product</button>
                <button className='bg-gray-200 p-2 rounded-md' style={{backgroundColor:viewName === 'Enquiry' ? 'Gray' : 'White',color:viewName === 'Enquiry' ? 'White' : 'Black'}} onClick={() => setViewName('Enquiry')}>Enquiries</button>
                <button className='bg-gray-200 p-2 rounded-md' style={{backgroundColor:viewName === 'Subscriber' ? 'Gray' : 'White',color:viewName === 'Subscriber' ? 'White' : 'Black'}} onClick={() => setViewName('Subscriber')}>Subscribers</button>
            </div>
            <div>
                <ViewDisplay viewName={viewName}/>
            </div>
        </div>
        </>
    )
    
}

export default AdminConsole