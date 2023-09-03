import React, { useEffect, useState } from 'react'
import subscriberServices from '../../services/subscriberServices'

const SubscribersList = () => {
  const [subscribers, setEnquiries] = useState()

  useEffect(() => {
    subscriberServices.getSubscribers().then(subscribersData => setEnquiries(subscribersData))
  }, [])

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className="text-lg font-semibold leading-7 text-primaryBrown mb-4">Subscribers</h2>
      <ul role="list" className="divide-y divide-gray-100 flex flex-col gap-2">
        {subscribers?.map((subscriber) => (
          <li key={subscriber.id} className="flex justify-between gap-x-6 p-5 rounded-lg bg-gray-100">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{subscriber}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              {/* <p className="text-sm leading-6 text-gray-900">{subscriber.product}</p>
              <p className="text-sm leading-6 text-gray-900">{subscriber.message}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscribersList