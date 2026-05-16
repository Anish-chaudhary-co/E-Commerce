import React from 'react'
import { MdArrowForward } from 'react-icons/md'

import Clothes from '../../photos/clothes.jpg'
import Clothing from '../../photos/clothing.jpg'
import Accessories from '../../photos/accessories.jpg'
import Shoes from '../../photos/shoes.jpg'

export default function introduction() {
  return (
    <>
    <div className='flex gap-2 mt-40 bg-amber-50'>
      <div className='m-15'>
        <button className='text-xs font-sans-serif bg-amber-100 w-30 p-1 text-orange-600 shadow-lg shadow-white/30 rounded-xl'>NEW COLLECTION</button>
        <div className='font-italic'>
        <h1 className='text-3xl font-bold mt-4'>Crafted for</h1>
        <h1 className='text-6xl font-bold text-orange-600'>Comfort & Style</h1>
        <p className='mt-4 text-gray-600'>Discover our latest arrivals, designed to elevate your everyday look with a blend of comfort and style.</p>
        </div>
        <div className='flex gap-5'>
        <div className='flex justify-center items-center gap-5 w-50 cursor-pointer bg-orange-600 text-white mt-6 p-2 rounded-lg shadow-[0px_8px_15px_-5px_rgba(0,0,0,0.2)]'>
          <span>Shop Collection</span>
          <span><MdArrowForward/></span>
        </div>
        <div className='flex items-center justify-center bg-white shadow-lg border border-gray-300 w-40 mt-6 p-2 rounded-lg cursor-pointer'>Featured Items</div>
        </div>

        <hr className='border-gray-200 mt-18'></hr>

        <div className='flex gap-36 mt-15'>
            <div>
              <p className='text-2xl font-bold'>50K+</p>
              <p className='text-gray-600'>Happy Customers</p>
            </div>

            <div>
              <p className='text-2xl font-bold'>4.9</p>
              <p className='text-gray-600'>Average Rating</p>
            </div>

            <div>
              <p className='text-2xl font-bold'>Free</p>
              <p className='text-gray-600'  >Shipping over $100</p>
            </div>
        </div>

      </div>
      <div className='flex p-2 gap-4'>
        <div className=''>
        <div className='h-83 w-77 rounded-lg overflow-hidden shadow-lg shadow-gray-400'>
           <img src={Clothes} alt="clothes" className='w-full h-full object-cover'/>
        </div>
        <div className='h-83 w-77 rounded-lg mt-4 overflow-hidden shadow-lg shadow-gray-400'>
            <img src={Clothing} alt="clothing" className='w-full h-full object-cover'/>
        </div>
        </div>

        <div className=''>
        <div className='h-64 w-80 rounded-lg mt-9 overflow-hidden shadow-lg shadow-gray-400 '>
            <img src={Accessories} alt="accessories" className='w-full h-full object-cover'/>
        </div>
        <div className='h-84 w-80 rounded-lg mt-4 overflow-hidden shadow-lg shadow-gray-400'>
            <img src={Shoes} alt="shoes" className='w-full h-full object-cover' />
        </div>
        </div>

      </div>
    </div>
    </>
  )
  }

  