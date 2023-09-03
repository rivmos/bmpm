import React, { useEffect, useState } from 'react'
import enquiryServices from '../../services/enquiryServices'

const EnquiryLists = () => {
  const [enquiries, setEnquiries] = useState()

  useEffect(() => {
    enquiryServices.getEnquiries().then(enquiriesData => setEnquiries(enquiriesData))
  }, [])

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className="text-lg font-semibold leading-7 text-primaryBrown mb-4">Enquiries</h2>
      <ul role="list" className="divide-y divide-gray-100 flex flex-col gap-2">
        {enquiries?.map((enquiry) => (
          <li key={enquiry.id} className="flex justify-between gap-x-6 p-5 rounded-lg bg-gray-100">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{enquiry.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{enquiry.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{enquiry.product}</p>
              <p className="text-sm leading-6 text-gray-900">{enquiry.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EnquiryLists