import React from 'react'

export default function allProduct() {
  return (
    <div className='flex justify-between bg-white shadow-[0_8px_15px_-5px_rgba(0,0,0,0.2)] p-3 items-center fixed top-0 w-full z-10'>
        <div>LOGO</div>
        <div className='flex gap-8 text-lg'>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
        </div>

        <div className='mr-5'>
          <input type="text" placeholder='Enter the name of product' className='border m-2 p-1 rounded'/>
          <button className='border rounded p-1'>Search</button>
        </div>
        
        <div>
        </div>

      </div>
  )
}
