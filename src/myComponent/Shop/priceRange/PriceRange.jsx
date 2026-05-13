const PriceRange = ({ setPrice, setPriceSelected}) => {
  const priceRange = [
    "Featured",
    "Newest",
    "Low to High",
    "High to low",
    "Top Rated",
  ];
  const priceHandler = (value) => {
    setPrice(false);
    setPriceSelected(value);
  };
  return (
    <div className="absolute z-50 mt-2 bg-white border border-gray-200 shadow-lg p-2 duration-200 w-40 rounded-lg">
      {priceRange.map((items, index) => (
        <div
          onClick={() => priceHandler(items)}
          key={index}
          className="p-2 hover:bg-amber-500 cursor-pointer hover:rounded-lg"
        >
          {items}
        </div>
      ))}
    </div>
  );
};

export default PriceRange;
