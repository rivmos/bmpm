import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return (
    <div className='text-4xl font-bold flex justify-center items-center h-screen'>{error.statusText}{':('}</div>
  )
}

export default Error