// Accessories
import LeatherWAllet from '../../assets/LeatherWallet.jpg';
import Watch from '../../assets/Watch.jpg';
import SunGlasses from '../../assets/SunGlass.jpg';
import MenBelt from '../../assets/MenBelt.jpg';
import WirelessEarbuds from '../../assets/WirelessBuds.jpg';
import Backpack from '../../assets/BackPack.webp';
import BraceletSet from '../../assets/BraceletSet.webp';
import PhoneStand from '../../assets/Phonestand.jpg';
import BluetoothSpeaker from '../../assets/BluetoothSpeaker.jpg';
import KeyOrganizer from '../../assets/keyOrganizer.webp';

// Shoes
import RunningSneakers from '../../assets/RunningSneaker.jpg';
import CanvasShoes from '../../assets/CanvasShoes.webp';
import FormalShoes from '../../assets/FormalShoes.jpg';
import HighTopSneakers from '../../assets/HighSneaker.webp';
import Loafers from '../../assets/Lofars.jpg';
import TrainingShoes from '../../assets/TraningShoes.jpg';
import WalkingShoes from '../../assets/WalkingShoes.jpeg';
import JoggingShoes from '../../assets/JoggingShoes.jpg';
import OfficeShoes from '../../assets/OfficeShoes.jpg';
import TrekkingShoes from '../../assets/trekkingShoes.jpg';

// House appliances
import ElectricKettle from '../../assets/ElectricKettle.jpg';
import RiceCooker from '../../assets/RiceCooker.jpeg';
import MixerGrinder from '../../assets/MixerGrinder.jpg';
import AirFryer from '../../assets/AirFryer.png';
import VacuumCleaner from '../../assets/Vaccumcleaner.jpg';
import ElectricIron from '../../assets/ElectricIron.jpg';
import WaterHeater from '../../assets/WaterHeater.jpg';
import MicrowaveOven from '../../assets/MicrowaveOvan.jpg';
import TableFan from '../../assets/Tablefan.jpg';
import InductionCooktop from '../../assets/InductionCooktop.jpg';

// Clothes
import CottonTShirt from '../../assets/CottonT-Shirt.webp';
import CasualTop from '../../assets/CasualTop.jpg';
import DenimJeans from '../../assets/DenimJeans.webp';
import Hoodie from '../../assets/Hoddie.jpg';
import FormalShirt from '../../assets/FormalShirt.jpg';
import SummerDress from '../../assets/SummerDress.jpg';
import MenJacket from '../../assets/MenJacket.jpg';
import CasualShorts from '../../assets/CasualShort.jpg';
import WoolSweater from '../../assets/WoolSweater.jpg';
import TraditionalKurta from '../../assets/TraditionalKurta.jpg';

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
    background: Backpack,
    price: 5200,
    discount: 30,
    rating: 3.5
  },
  {
    name: "Bracelet Set",
    title: "Trendy bracelet set for daily style",
    category: "accessories",
    background: BraceletSet,
    price: 1100,
    discount: 12,
    rating: 3
  },
  {
    name: "Phone Stand",
    title: "Adjustable stand for smartphones",
    category: "accessories",
    background: PhoneStand,
    price: 700,
    discount: 18,
    rating: 3.5
  },
  {
    name: "Bluetooth Speaker",
    title: "Portable speaker with deep bass",
    category: "accessories",
    background: BluetoothSpeaker,
    price: 4800,
    discount: 22,
    rating: 4
  },
  {
    name: "Key Organizer",
    title: "Compact organizer for keys",
    category: "accessories",
    background: KeyOrganizer,
    price: 650,
    discount: 8,
    rating: 3
  },

  // SHOES
  {
    name: "Running Sneakers",
    title: "Lightweight sneakers for running",
    category: "shoes",
    background: RunningSneakers,
    price: 6500,
    discount: 20,
    rating: 4
  },
  {
    name: "Canvas Shoes",
    title: "Comfortable casual canvas shoes",
    category: "shoes",
    background: CanvasShoes,
    price: 4200,
    discount: 25,
    rating: 3.5
  },
  {
    name: "Formal Shoes",
    title: "Leather formal shoes for office",
    category: "shoes",
    background: FormalShoes,
    price: 7800,
    discount: 10,
    rating: 4
  },
  {
    name: "High-Top Sneakers",
    title: "Stylish high-top street sneakers",
    category: "shoes",
    background: HighTopSneakers,
    price: 5900,
    discount: 30,
    rating: 3
  },
  {
    name: "Loafers",
    title: "Easy slip-on loafers for comfort",
    category: "shoes",
    background: Loafers,
    price: 4800,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Training Shoes",
    title: "Durable shoes for workouts",
    category: "shoes",
    background: TrainingShoes,
    price: 7200,
    discount: 35,
    rating: 4
  },
  {
    name: "Walking Shoes",
    title: "Comfortable shoes for daily walks",
    category: "shoes",
    background: WalkingShoes,
    price: 3600,
    discount: 18,
    rating: 3
  },
  {
    name: "Jogging Shoes",
    title: "Breathable shoes for jogging",
    category: "shoes",
    background: JoggingShoes,
    price: 5400,
    discount: 22,
    rating: 3.5
  },
  {
    name: "Office Shoes",
    title: "Professional shoes for office wear",
    category: "shoes",
    background: OfficeShoes,
    price: 6900,
    discount: 12,
    rating: 4
  },
  {
    name: "Trekking Shoes",
    title: "Rugged shoes for outdoor trekking",
    category: "shoes",
    background: TrekkingShoes,
    price: 8200,
    discount: 28,
    rating: 4
  },

  // HOUSE APPLIANCES
  {
    name: "Electric Kettle",
    title: "Fast boiling electric kettle",
    category: "house-appliances",
    background: ElectricKettle,
    price: 2400,
    discount: 10,
    rating: 3.5
  },
  {
    name: "Rice Cooker",
    title: "Automatic rice cooker for home",
    category: "house-appliances",
    background: RiceCooker,
    price: 5600,
    discount: 20,
    rating: 4
  },
  {
    name: "Mixer Grinder",
    title: "Powerful mixer for kitchen use",
    category: "house-appliances",
    background: MixerGrinder,
    price: 6300,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Air Fryer",
    title: "Healthy cooking with less oil",
    category: "house-appliances",
    background: AirFryer,
    price: 9800,
    discount: 25,
    rating: 4
  },
  {
    name: "Vacuum Cleaner",
    title: "Powerful cleaner for dust removal",
    category: "house-appliances",
    background: VacuumCleaner,
    price: 8700,
    discount: 30,
    rating: 3
  },
  {
    name: "Electric Iron",
    title: "Quick heating iron for clothes",
    category: "house-appliances",
    background: ElectricIron,
    price: 2100,
    discount: 12,
    rating: 3.5
  },
  {
    name: "Water Heater",
    title: "Instant hot water heater",
    category: "house-appliances",
    background: WaterHeater,
    price: 14500,
    discount: 18,
    rating: 4
  },
  {
    name: "Microwave Oven",
    title: "Multi-purpose microwave oven",
    category: "house-appliances",
    background: MicrowaveOven,
    price: 16200,
    discount: 22,
    rating: 4
  },
  {
    name: "Table Fan",
    title: "Energy efficient table fan",
    category: "house-appliances",
    background: TableFan,
    price: 3200,
    discount: 8,
    rating: 3
  },
  {
    name: "Induction Cooktop",
    title: "Smart induction cooking solution",
    category: "house-appliances",
    background: InductionCooktop,
    price: 5400,
    discount: 35,
    rating: 4
  },

  // CLOTHES
  {
    name: "Cotton T-Shirt",
    title: "Soft cotton t-shirt for daily wear",
    category: "clothes",
    background: CottonTShirt,
    price: 1200,
    discount: 15,
    rating: 3.5
  },
  {
    name: "Casual Top",
    title: "Stylish top for casual outings",
    category: "clothes",
    background: CasualTop,
    price: 1600,
    discount: 20,
    rating: 4
  },
  {
    name: "Denim Jeans",
    title: "Comfort fit denim jeans",
    category: "clothes",
    background: DenimJeans,
    price: 3800,
    discount: 25,
    rating: 3.5
  },
  {
    name: "Hoodie",
    title: "Warm hoodie for winter season",
    category: "clothes",
    background: Hoodie,
    price: 4200,
    discount: 10,
    rating: 3
  },
  {
    name: "Formal Shirt",
    title: "Classic formal shirt for office",
    category: "clothes",
    background: FormalShirt,
    price: 2900,
    discount: 30,
    rating: 4
  },
  {
    name: "Summer Dress",
    title: "Light dress for summer comfort",
    category: "clothes",
    background: SummerDress,
    price: 5100,
    discount: 18,
    rating: 3.5
  },
  {
    name: "Men Jacket",
    title: "Stylish jacket for cold weather",
    category: "clothes",
    background: MenJacket,
    price: 7600,
    discount: 22,
    rating: 4
  },
  {
    name: "Casual Shorts",
    title: "Comfortable shorts for daily use",
    category: "clothes",
    background: CasualShorts,
    price: 1800,
    discount: 12,
    rating: 3
  },
  {
    name: "Wool Sweater",
    title: "Warm wool sweater for winter",
    category: "clothes",
    background: WoolSweater,
    price: 5400,
    discount: 28,
    rating: 4
  },
  {
    name: "Traditional Kurta",
    title: "Comfortable kurta for festivals",
    category: "clothes",
    background: TraditionalKurta,
    price: 3600,
    discount: 35,
    rating: 3.5
  }
];

export default products;
