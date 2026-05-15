import React from 'react'

export default function Footer() {
  return (
    <div className=' mt-35 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)]'>

        <div className='flex flex-wrap justify-between p-16 pt-20'>

        <div>
            <h1 className='text-xl font-bold'>ShopByMe</h1>
            <p>Thoughtfully crafted good for modern living. Quality materials, timeless design.</p>
        </div>

        <div>
            <h1 className='font-bold'>SHOP</h1>
            <ul>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">All Product</a></li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">Clothing</a></li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">Accessories</a></li>
            </ul>
        </div>

        <div>
            <h1 className='font-bold'>COMPANY</h1>
            <ul>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">About Us</a></li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">Sustainability</a></li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#">Careers</a></li>
            </ul>
        </div>

        <div>
            <h1 className='font-bold'>SUPPORT</h1>
            <ul>
                <li className='hover:text-red-500 cursor-pointer'><a href="#"></a>Contact Us</li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#"></a>FAQs</li>
                <li className='hover:text-red-500 cursor-pointer'><a href="#"></a>Shipping</li>
            </ul>
        </div>

        </div>

    </div>
  )
}
