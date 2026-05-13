import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import PriceRange from "./PriceRange";


const PriceRangeBTN = ({ selectedPrice, setSelectedPrice }) => {
  const [Price, setPrice] = useState(false);

  useEffect(() => {
      setSelectedPrice(selectedPrice);
  }, [selectedPrice]);

  return (
    <div>
      <div
        onClick={() => setPrice((prev) => !prev)}
        className="flex justify-between items-center gap-2 border border-gray-200 bg-white shadow-lg h-9 w-40 p-2 rounded-md cursor-pointer"
      >
        <span>{selectedPrice}</span>
        {Price ? (
          <MdOutlineKeyboardArrowUp className="text-2xl" />
        ) : (
          <MdOutlineKeyboardArrowDown className="text-2xl" />
        )}
      </div>
      {Price && (
        <PriceRange setPrice={setPrice} setPriceSelected={setSelectedPrice} />
      )}
    </div>
  );
};

export default PriceRangeBTN;
