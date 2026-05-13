import React from "react";
import { MdDelete } from "react-icons/md";

const CartItems = ({
  count,
  setCount,
  image,
  category,
  name,
  onDelete,
  cartItems,
}) => {
  if (!cartItems) {
    alert("Your cartItems is empty.");
    return null;
  }
console.log(cartItems);


  return (
    <>
      <div className="flex border gap-2 mt-30 w-225">
        <div className="h-45 w-45 rounded-lg m-3">
          <img src={cartItems.background || image} alt="Img" />
        </div>
        <div className="flex flex-col gap-2 pt-7">
          <div className="flex gap-100">
            <span className="text-xl">{cartItems.name || name}</span>
            <span>${cartItems.price * count}</span>
          </div>
          <span className="text-gray-400">
            {cartItems.category || category}
          </span>
          <div className="flex-wrap pl-4 pt-7">
            <button
              onClick={() => handleDecrement()}
              disabled={count <= 1}
              className="border  rounded-lg h-10 w-10 bg-gray-200"
            >
              -
            </button>
            <span className="pl-5 pr-5">{count}</span>
            <button
              onClick={() => handleIncrement()}
              className="border rounded-lg h-10 w-10 bg-gray-200"
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
        </div>
      </div>
    </>
  );
};

export default CartItems;
