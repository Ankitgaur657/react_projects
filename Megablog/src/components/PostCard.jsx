import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage, }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-300 rounded-xl p-4'>
           <div className='w-full justify-center mb-4'>
            <img src={service.getFilePreview(featuredImage)} alt={title} className='w-full h-64 object-cover rounded-lg'/>
           </div>
           <h2 className='text-xl font-bold '>{title}</h2>
      </div>
      </Link>
    </div>
  )
}

export default PostCard
