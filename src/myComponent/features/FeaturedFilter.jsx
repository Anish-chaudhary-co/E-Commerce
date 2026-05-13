import React from 'react'
import ProductList from '../productList/productList.js'


const FeaturedFilter = () => {
    const filterProduct = ProductList.filter((product)=>product.price>=9000);
  return (
    <>
        <div className="ml-18 mt-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Featured Product
          </h1>
          <p className='text-gray-400'>Our most loved items, handpicked for you</p>
        </div>
        


    <div className='grid grid-cols-4 mt-20'>
    {filterProduct.map((product) =>(
    
        <div key={product.name} className='h-100 w-80 relative rounded-xl overflow-hidden transform transition duration-200 group hover:scale-110'>

            <div className='absolute inset-0 '>
                <img src={product.background} alt="Product" className='h-full w-full object-cover absolute inset-0'/>
                 
            </div>
            <div className='absolute inset-0 bg-black/40'></div>
            
            <div className='absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1 text-white'>
            <div className='p-1 rounded-xl bg-orange-600 text-white text-sm w-12 opacity-80 cursor-pointer'>-{product.discount}%</div>
            <span className='text-sm cursor-pointer'>{product.category}</span>
            <span className='font-bold cursor-pointer group-hover:text-red-600'>{product.name}</span>
            <span className='text-gray-300 text-sm cursor-pointer'>{product.title}</span>

            <div className='flex justify-between mt-2 cursor-pointer'>
                <div>${product.price}</div>
                <div>{product.rating}⭐</div>
            </div>
            </div>
            

        </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default FeaturedFilter