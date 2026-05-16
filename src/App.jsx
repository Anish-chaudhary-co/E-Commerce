import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import Navbar from "./myComponent/frontpage/navbar.jsx";
import Community from "./myComponent/frontpage/community.jsx";
import Footer from "./myComponent/frontpage/footer.jsx";
import Home from "./myComponent/home/Home.jsx";
//shop
import Shop from "./myComponent/Shop/Shop.jsx";
//importing cart
import MyCart from "./myComponent/cart/MyCart.jsx";

function App() {
  //this is for category item to shop page
  const [categoryValue, setCategoryValue] = useState("");
  const [selected, setSelected] = useState("All Categories");

  const [cartItems, setCartItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({});
  const [theme, setTheme] = useState("Dark");

  const handleThemeToggle = () => {
    const newTheme = theme === "Dark" ? "Light" : "Dark";
    setTheme(newTheme);
    document.body.className = newTheme === "Dark" ? "dark" : "light";
  };

  const addToCart = (newItem) => {
    const existingItem = cartItems.find((item) => item.name === newItem.name);
    if (existingItem) {
      alert("Item already in cart");
      return null; // Don't render the item again
    }
    setCartItems([...cartItems, newItem]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            selected={categoryValue || selected}
            setSelected={setSelected}
          />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar handleThemeToggle={handleThemeToggle} theme={theme} />
          <MyCart cartItems={cartItems} setCartItems={setCartItems} />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />
          <Shop
            addToCart={addToCart}
            onSelect={setItemDetails}
            cartItems={cartItems}
            itemDetails={itemDetails}
            selected={selected}
            setSelected={setSelected}
            categoryValue={categoryValue}
          />
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar /> <Community /> <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
