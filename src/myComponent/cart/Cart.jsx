import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({
  count,
  setCount,
  handleIncrement,
  handleDecrement,
  image,
  category,
  name,
  onDelete,
  cartItems,
}) => {
  return (
    <div className="flex gap-2 rounded-lg mt-30 bg-gray-300 w-225 shadow-lg shadow-gray-400">
      <div className="h-45 w-45 rounded-xl m-3">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={cartItems.background || image}
          alt="Img"
        />
      </div>
      <div className="flex flex-col gap-2 pt-7">
        <div className="flex gap-100">
          <span className="text-xl">{cartItems.name || name}</span>
          <span>${cartItems.price * count}</span>
        </div>
        <span className="text-gray-400">
          {cartItems.category || category} Clothing
        </span>
        <div className="flex flex-wrap gap-80 pl-4 pt-7">
          <div>
            <button
              onClick={handleDecrement}
              disabled={count <= 1}
              className="bg-gray-400 shadow-lg  rounded-lg h-10 w-10 hover:bg-gray-500"
            >
              -
            </button>
            <span className="pl-5 pr-5">{count}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-400 rounded-lg h-10 w-10 shadow-lg hover:bg-gray-500"
            >
              +
            </button>
            <button
              onClick={onDelete}
              className="ml-4 text-red-500 hover:text-red-700"
              title="Remove item"
            >
              <MdDelete size={24} />
            </button>
          </div>
          <div className="h-10">
            <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
