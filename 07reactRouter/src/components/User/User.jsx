import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='text-center font-bold text-white text-3xl py-4 my-6 mx-5 bg-orange-600 rounded-xl'>
      User - {userid}
      <p className='my-6'>Thank you for visiting this page</p>
    </div>
  )
}

export default User
