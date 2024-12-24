import React from 'react'
import { useParams } from 'react-router-dom'

//automatically have an access of userid from main,jsx
function User() {

    const {userid}=useParams()

  return (
    <div className='bg-gray-800 text-white text-3xl p-4'>
      User:{userid}
    </div>
  )
}

export default User
