const UIFeatures = ({
  products,
  price,
  addToCart,
  onSelect,
  setShowDetails,
}) => {
  const handleDetails = (items) => {
    onSelect(items);
    setShowDetails(true);
  };

  //this for sorting the products based on the price selected by the user, if price is not selected then it will return the original products array
  const sortedProducts = price ? [...products].sort(price) : products;

  return (
    <>
      {sortedProducts.map((product) => (
        <div
          key={product.name}
          className="h-100 w-80 relative rounded-xl shadow-lg shadow-gray-900 overflow-hidden transform transition duration-200 group hover:scale-110"
          onClick={() => handleDetails(product)}
        >
          <div className="absolute inset-0 ">
            <img
              src={product.background}
              alt="Product"
              className="h-full w-full object-cover absolute inset-0"
            />
          </div>
          <div className="absolute inset-0 bg-black/40"></div>

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

            <div className="flex justify-between mt-2 cursor-pointer">
              <div>${product.price}</div>
              <div>{product.rating}⭐</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default UIFeatures;
