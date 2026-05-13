import React, { useState } from "react";
import UIFeatures from "../features/uiFeatures.jsx";
import ShopSelector from "./ShopSelector.jsx";
import products from "../productList/productList.js";

import ProductDetails from "./ProductDetails.jsx";

const Shop = ({ addToCart, onSelect, cartItems, itemDetails }) => {
  const [selected, setSelected] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("Featured");
  const [showDetails, setShowDetails] = useState(false);

  const categoryMap = {
    "All Categories": null,
    "Clothing": "clothes",
    "Accessories": "accessories",
    "Footwear": "shoes",
    "Home & Living": "house-appliances"
  };

  const priceMap = {
    "Featured": null,
    "Newest": (a, b) => new Date(b.date) - new Date(a.date),
    "Low to High": (a, b) => a.price - b.price,
    "High to low": (a, b) => b.price - a.price,
    "Top Rated": (a, b) => b.rating - a.rating
  };

  const filteredProducts = categoryMap[selected]
    ? products.filter((product) => product.category === categoryMap[selected])
    : products;

  return (
    <>
      <ShopSelector
        Selected={selected}
        setSelected={setSelected}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <div className="flex flex-wrap gap-7 m-18">
        <UIFeatures products={filteredProducts} price={priceMap[selectedPrice]} addToCart={addToCart} onSelect={onSelect} setShowDetails={setShowDetails}/>
      </div>

<div>
  {showDetails ? <ProductDetails addToCart={addToCart} product={itemDetails} setShowDetails={setShowDetails}/> : null}
</div>
    </>
  );
}
export default Shop;
