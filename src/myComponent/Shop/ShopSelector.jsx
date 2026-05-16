import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import SelectorUI from "./SelectorUI";
import PriceRangeBTN from "./priceRange/PriceRangeBTN";

const ShopSelector = ({ Selected, setSelected, selectedPrice, setSelectedPrice}) => {
  const [Open, setOpen] = useState(false);
    
  return (
    <>
      {/* to change the product name dynamic according to the selection */}
      <div className="m-20 grid grid-1fr gap-2">
        <span className="text-4xl font-bold">{Selected}</span>
        {/* <span className="text.md text-gray-400">2 product found</span> */}
      </div>

      <div className="flex justify-between m-20">
        {/* this is for input */}
        <div className="flex gap-2">
          <input type="text" placeholder="Search product...." className="border border-gray-200 w-232 p-2 h-9 rounded-lg" />
          <button type="submit" className="border border-gray-200 w-20 h-9 rounded-lg cursor-pointer">Search</button>
        </div>
        <div>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="flex justify-between items-center gap-2 border border-gray-200 bg-white shadow-lg h-9 w-40 p-2 rounded-md cursor-pointer"
          >
            <span>{Selected}</span>
            {/* this part to make the icon if open is false than it go down else it go up */}
            {Open ? (
              <MdOutlineKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            )}
          </div>

          {/* this part is to print all the array if open is false or it work like if(open===false) 
if it is close than it open and if it is open than it will close*/}
          {Open && <SelectorUI Selected={Selected} setSelected={setSelected} setOpen={setOpen} Open={Open}/>}
        </div>
        <div>
          <PriceRangeBTN selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
        </div>
      </div>
    </>
  );
};

export default ShopSelector;
