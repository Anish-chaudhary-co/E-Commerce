

const SelectorUI = ({setSelected, setOpen}) => {
  const items = [
    "All Categories",
    "Clothing",
    "Accessories",
    "Footwear",
    "Home & Living"
  ];

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className='absolute z-50 mt-2 bg-white shadow-lg border border-gray-200 duration-200 rounded-md p-2 w-40'>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => handleSelect(item)}
          className='p-2 hover:bg-orange-400 rounded-lg cursor-pointer'
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectorUI;
