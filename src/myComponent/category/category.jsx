import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Catogo from './catogo.jsx'
import Cloth from '../../photos/cloth.jpg'
import Accessor from '../../photos/accessor.png'
import Footware from '../../photos/footware.jpg'
import Home from '../../photos/home.jpg'

export default function category({ selected, setSelected, setCategoryValue }) {
  const [ProductValue,setProductValue] = useState("");
  const navigate = useNavigate();
  const handleProductValue =(title,value)=>{
    setProductValue(title)
    setCategoryValue(value);
    setSelected(value);
    navigate("/Shop");
    console.log(selected);
     }
  
  
  return (
    <>
    <div className=' mt-10'>
        <div className='m-15'>
          <h1 className='text-5xl font-bold font-italic mb-2 '>
            Shop By Category 
          </h1>
          <p className='text-gray-400'>Find exactly what you're looking for</p>
        </div>

            <div className='flex justify-end mr-18'>
          <button className='text-red-400'>View All</button>
            </div>

        <div className='flex flex-wrap gap-8 ml-18 mt-4 mb-20'> 

        <Catogo image={Cloth} title="Clothes" count="2" onClick={(e) => handleProductValue("Clothes", "Clothing")}/>
        <Catogo image={Accessor} title="Accessories" count="5" onClick={(e) => handleProductValue("Accessories", "Accessories")}/>
        <Catogo image={Footware} title="Shoes" count="4" onClick={(e) => handleProductValue("Shoes", "Footwear")}/>
        <Catogo image={Home} title="Home appliances" count="3" onClick={(e) => handleProductValue("Home appliances", "Home & Living")}/>
          
          </div>
    </div>
    </>
  )
}
