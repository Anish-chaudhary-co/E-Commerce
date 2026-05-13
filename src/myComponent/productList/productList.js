import LeatherWAllet from '../../assets/leatherwallet.jpg';
import Watch from '../../assets/watch.jpg';
import SunGlasses from '../../assets/sunglasses.jpg';
import MenBelt from '../../assets/menbelt.jpg';
import WirelessEarbuds from '../../assets/wirelessearbuds.jpg';
const products = [
  {
    name: "Leather Wallet",
    title: "Premium leather wallet with slim design",
    category: "accessories",
    background: LeatherWAllet,
    price: 1200,
    discount: 10,
    rating: 3.5
  },
  {
    name: "Wrist Watch",
    title: "Classic analog watch for daily wear",
    category: "accessories",
    background: Watch,
    price: 3500,
    discount: 15,
    rating: 4
  },
  {
    name: "Sunglasses",
    title: "Stylish UV protection sunglasses",
    category: "accessories",
    background: SunGlasses,
    price: 1800,
    discount: 20,
    rating: 3
  },
  {
    name: "Men Belt",
    title: "Durable belt with adjustable buckle",
    category: "accessories",
    background: MenBelt,
    price: 900,
    discount: 5,
    rating: 3.5
  },
  {
    name: "Wireless Earbuds",
    title: "Clear sound wireless earbuds",
    category: "accessories",
    background: WirelessEarbuds,
    price: 4200,
    discount: 25,
    rating: 4
  },
  {
    name: "Backpack",
    title: "Spacious backpack for travel and college",
    category: "accessories",
    background: "https://picsum.photos/400/500?6",
    price: 5200,
    discount: 30,
    rating: 3.5
  },
  {
    name: "Bracelet Set",
    title: "Trendy bracelet set for daily style",
    category: "accessories",
    background: "https://picsum.photos/400/500?7",
    price: 1100,
    discount: 12,
    rating: 3
  },
  {
    name: "Phone Stand",
    title: "Adjustable stand for smartphones",
    category: "accessories",
    background: "https://picsum.photos/400/500?8",
    price: 700,
    discount: 18,
    rating: 3.5
  },
  {
    name: "Bluetooth Speaker",
    title: "Portable speaker with deep bass",
    category: "accessories",
    background: "https://picsum.photos/400/500?9",
    price: 4800,
    discount: 22,
    rating: 4
  },
  {
    name: "Key Organizer",
    title: "Compact organizer for keys",
    category: "accessories",
    background: "https://picsum.photos/400/500?10",
    price: 650,
    discount: 8,
    rating: 3
  },

  // SHOES
  {
    name: "Running Sneakers",
    title: "Lightweight sneakers for running",
    category: "shoes",
    background: "https://picsum.photos/400/500?11",
    price: 6500,
    discount: 20,
    rating: 4
  },
  {
    name: "Canvas Shoes",
    title: "Comfortable casual canvas shoes",
    category: "shoes",
    background: "https://picsum.photos/400/500?12",
    price: 4200,
    discount: 25,
    rating: 3.5
  },
  {
    name: "Formal Shoes",
    title: "Leather formal shoes for office",
    category: "shoes",
    background: "https://picsum.photos/400/500?13",
    price: 7800,
    discount: 10,
    rating: 4
  },
  {
    name: "High-Top Sneakers",
    title: "Stylish high-top street sneakers",
    category: "shoes",
    background: "https://picsum.photos/400/500?14",
    price: 5900,
    discount: 30,
    rating: 3
  },
  {
    name: "Loafers",
    title: "Easy slip-on loafers for comfort",
    category: "shoes",
    background: "https://picsum.photos/400/500?15",
    price: 4800,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Training Shoes",
    title: "Durable shoes for workouts",
    category: "shoes",
    background: "https://picsum.photos/400/500?16",
    price: 7200,
    discount: 35,
    rating: 4
  },
  {
    name: "Walking Shoes",
    title: "Comfortable shoes for daily walks",
    category: "shoes",
    background: "https://picsum.photos/400/500?17",
    price: 3600,
    discount: 18,
    rating: 3
  },
  {
    name: "Jogging Shoes",
    title: "Breathable shoes for jogging",
    category: "shoes",
    background: "https://picsum.photos/400/500?18",
    price: 5400,
    discount: 22,
    rating: 3.5
  },
  {
    name: "Office Shoes",
    title: "Professional shoes for office wear",
    category: "shoes",
    background: "https://picsum.photos/400/500?19",
    price: 6900,
    discount: 12,
    rating: 4
  },
  {
    name: "Trekking Shoes",
    title: "Rugged shoes for outdoor trekking",
    category: "shoes",
    background: "https://picsum.photos/400/500?20",
    price: 8200,
    discount: 28,
    rating: 4
  },

  // HOUSE APPLIANCES
  {
    name: "Electric Kettle",
    title: "Fast boiling electric kettle",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?21",
    price: 2400,
    discount: 10,
    rating: 3.5
  },
  {
    name: "Rice Cooker",
    title: "Automatic rice cooker for home",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?22",
    price: 5600,
    discount: 20,
    rating: 4
  },
  {
    name: "Mixer Grinder",
    title: "Powerful mixer for kitchen use",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?23",
    price: 6300,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Air Fryer",
    title: "Healthy cooking with less oil",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?24",
    price: 9800,
    discount: 25,
    rating: 4
  },
  {
    name: "Vacuum Cleaner",
    title: "Powerful cleaner for dust removal",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?25",
    price: 8700,
    discount: 30,
    rating: 3
  },
  {
    name: "Electric Iron",
    title: "Quick heating iron for clothes",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?26",
    price: 2100,
    discount: 12,
    rating: 3.5
  },
  {
    name: "Water Heater",
    title: "Instant hot water heater",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?27",
    price: 14500,
    discount: 18,
    rating: 4
  },
  {
    name: "Microwave Oven",
    title: "Multi-purpose microwave oven",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?28",
    price: 16200,
    discount: 22,
    rating: 4
  },
  {
    name: "Table Fan",
    title: "Energy efficient table fan",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?29",
    price: 3200,
    discount: 8,
    rating: 3
  },
  {
    name: "Induction Cooktop",
    title: "Smart induction cooking solution",
    category: "house-appliances",
    background: "https://picsum.photos/400/500?30",
    price: 5400,
    discount: 35,
    rating: 4
  },

  // CLOTHES
  {
    name: "Cotton T-Shirt",
    title: "Soft cotton t-shirt for daily wear",
    category: "clothes",
    background: "https://picsum.photos/400/500?31",
    price: 1200,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Casual Top",
    title: "Stylish top for casual outings",
    category: "clothes",
    background: "https://picsum.photos/400/500?32",
    price: 1600,
    discount: 20,
    rating: 4
  },
  {
    name: "Denim Jeans",
    title: "Comfort fit denim jeans",
    category: "clothes",
    background: "https://picsum.photos/400/500?33",
    price: 3800,
    discount: 25,
    rating: 3.5
  },
  {
    name: "Hoodie",
    title: "Warm hoodie for winter season",
    category: "clothes",
    background: "https://picsum.photos/400/500?34",
    price: 4200,
    discount: 10,
    rating: 3
  },
  {
    name: "Formal Shirt",
    title: "Classic formal shirt for office",
    category: "clothes",
    background: "https://picsum.photos/400/500?35",
    price: 2900,
    discount: 30,
    rating: 4
  },
  {
    name: "Summer Dress",
    title: "Light dress for summer comfort",
    category: "clothes",
    background: "https://picsum.photos/400/500?36",
    price: 5100,
    discount: 18,
    rating: 3.5
  },
  {
    name: "Men Jacket",
    title: "Stylish jacket for cold weather",
    category: "clothes",
    background: "https://picsum.photos/400/500?37",
    price: 7600,
    discount: 22,
    rating: 4
  },
  {
    name: "Casual Shorts",
    title: "Comfortable shorts for daily use",
    category: "clothes",
    background: "https://picsum.photos/400/500?38",
    price: 1800,
    discount: 12,
    rating: 3
  },
  {
    name: "Wool Sweater",
    title: "Warm wool sweater for winter",
    category: "clothes",
    background: "https://picsum.photos/400/500?39",
    price: 5400,
    discount: 28,
    rating: 4
  },
  {
    name: "Traditional Kurta",
    title: "Comfortable kurta for festivals",
    category: "clothes",
    background: "https://picsum.photos/400/500?40",
    price: 3600,
    discount: 35,
    rating: 3.5
  }
];

export default products;
