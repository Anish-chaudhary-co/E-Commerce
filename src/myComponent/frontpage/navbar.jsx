import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { ThemeContext } from "../Toggle-btn/ThemeContext";
import Toggle from "../Toggle-btn/Toggle";
import './navbar.css';

export default function Navbar({ handleThemeToggle, theme }) {
  const navigate = useNavigate();
  const [ShowInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(()=>{
    if(ShowInput){
      inputRef.current.focus();
    }
  }, [ShowInput])

  return (
    <>
      <div className="flex justify-between h-18 bg-white shadow-[0_8px_15px_-5px_rgba(0,0,0,0.2)] p-3 items-center fixed top-0 w-full z-10">
    {/* links and logo */}
        <div className="font-bold italic text-lg">ShopWithMe</div>
        <div className="flex gap-8 text-lg">
          <Link className="hover:text-red-400" to="/">Home</Link>
          <Link className="hover:text-red-400" to="/shop">Shop</Link>
          <Link className="hover:text-red-400" to="/community">Contact</Link>
        </div>

{/* search and cart */}
<div className="flex gap-8">
        <div className="relative flex items-center gap-4">
      <MdSearch
        onClick={() => setShowInput((prev) => !prev)}
        className="text-2xl cursor-pointer hover:text-red-400"
      />

      {ShowInput && (
               <input
          ref={inputRef}
          type="text"
          placeholder="Search product..."
          className="absolute right-8 border p-2 rounded shadow-md bg-white transition-all duration-200"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
    </div>

          <div
            onClick={() => navigate("/cart")}
            className="text-2xl pr-5 text-gray-700 cursor-pointer"
          >
            <MdShoppingCart className="hover:text-red-400"/>
          
          </div>
          <Toggle  handleThemeToggle={handleThemeToggle} theme={theme}/>
            
        </div>

        </div>
    </>
  );
}
