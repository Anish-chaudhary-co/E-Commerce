import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const ProductDetails = ({ product, addToCart, setShowDetails }) => {
  const handleCart = (item) => {
    addToCart(item);
    setShowDetails(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        key={product.name}
        className="h-150 w-130 relative rounded-xl bg-white/90 shadow-lg shadow-gray-400 overflow-hidden transform"
      >

        <div className="absolute inset-0 ">
          <img
            src={product.background}
            alt="Product"
            className="h-full w-full object-cover absolute inset-0"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute top-2 right-2 border-2 border-gray-300 rounded-full p-1 bg-white/80 z-20"
          onClick={() => setShowDetails(false)}
        >
          <MdClose className="text-2xl cursor-pointer" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1 text-white">
          <div className="p-1 rounded-xl bg-orange-600 text-white text-sm w-12 opacity-80 cursor-pointer">
            -{product.discount}%
          </div>
          <span className="text-sm cursor-pointer">{product.category}</span>
          <span className="font-bold cursor-pointer group-hover:text-red-600">
            {product.name}
          </span>
          <span className="text-gray-300 text-sm cursor-pointer">
            {product.title}
          </span>

          <div className="flex justify-between mt-2 cursor-pointer absolute z-20 bottom-5 left-5 right-5">
            <div>${product.price}</div>
            <div className="text-white/80 bg-green-600 px-3 py-1 rounded cursor-pointer shadow-lg shadow-gray-500" onClick={() => handleCart(product)}>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
