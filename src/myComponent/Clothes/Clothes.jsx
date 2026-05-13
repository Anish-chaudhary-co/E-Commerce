import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from './myComponent/productList/productList.js'
const Clothes = () => {
    const navigate = useNavigate();
    const [Navi, setNavi] = useState(false);
  return (
    <div onClick={()=>navigate(setNavi)}>
        <ProductList/>
    </div>
  )
}

export default Clothes