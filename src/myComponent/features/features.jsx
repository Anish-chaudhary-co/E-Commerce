import React from 'react'
import Features from './uiFeatures.jsx'

export default function Featured() {
  return (
   <>
    
    <div className="ml-20 mt-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Featured Product
          </h1>
          <p className='text-gray-400'>Our most loved items, handpicked for you</p>
        </div>

            
              <div className='flex justify-end mr-20 mt-10'>
            <a href="#" className="text-red-500">View All</a>
            </div>
          

        <div className='flex flex-wrap gap-8  mt-4 mb-20'> 
          <div className='h-80 w-80 border rounded-xl'>
            <h2 className="font-bold">Clothing</h2>
            <p>12 products</p>
          </div>
          <div className='h-80 w-80 border rounded-xl'>
            <h2 className="font-bold">Clothing</h2>
            <p>12 products</p>
          </div>
          <div className='h-80 w-80 border rounded-xl'>
            <h2 className="font-bold">Clothing</h2>
            <p>12 products</p>
          </div>
          <div className='h-80 w-80 border rounded-xl'>
            <h2 className="font-bold">Clothing</h2>
            <p>12 products</p>
          </div>
          </div>

          </div>

          <div className='flex flex-wrap gap-7 m-18'>
              <Features/>
          </div>


    </>
  )
}
