import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({});

  const addToCart = (newItem) => {
    const existingItem = cartItems.find((item) => item.name === newItem.name);
    if (existingItem) {
      alert("Item already in cart");
      return null;
    }
    setCartItems([...cartItems, newItem]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, itemDetails, setItemDetails }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);