import React, { useState } from "react";
import Navbar from "../frontpage/navbar.jsx";
import Footer from "../frontpage/footer.jsx";
import Cart from "./Cart.jsx";

const MyCart = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const handleIncrement = (idx) => {
    setQuantities((q) => q.map((qty, i) => (i === idx ? qty + 1 : qty)));
  };
  const handleDecrement = (idx) => {
    setQuantities((q) =>
      q.map((qty, i) => (i === idx && qty > 1 ? qty - 1 : qty)),
    );
  };
  const onDelete = (idx) => {
    setCartItems(items => items.filter((_, i) => i !== idx));
    setQuantities(q => q.filter((_, i) => i !== idx));
  };

  return (
    <>
      <Navbar />
      <div className="mt-30 m-10">
        <span className="font-bold text-4xl">Shopping Cart</span>
        {cartItems.length === 0 ? (
          <div className="p-10 text-center text-2xl">Your cart is empty.</div>
        ) : (
          <>
            {cartItems.map((item, idx) => (
              <Cart
                key={idx}
                count={quantities[idx]}
                setCount={(newCount) =>
                  setQuantities((q) =>
                    q.map((qty, i) => (i === idx ? newCount : qty)),
                  )
                }
                handleIncrement={() => handleIncrement(idx)}
                handleDecrement={() => handleDecrement(idx)}
                image={item.image}
                category={item.category}
                name={item.name}
                onDelete={() => onDelete(idx)}
                cartItems={item}
              />
            ))}
            <hr className="mt-5 text-gray-400 w-230" />
            <div className="mt-20 ml-13 border border-gray-400 w-50 flex justify-center p-1 rounded-md cursor-pointer hover:bg-gray-200 ">
              Continue Shopping.....
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
