# ShopByMe – Ecommerce React App

ShopByMe is a modern, responsive E-commerce web application built with React, Vite, and Tailwind CSS. It features a modular component structure, category-based product browsing, a shopping cart, and a clean, user-friendly interface.

---

## 📁 Project Structure

```
shopbyme/
│
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main app component, routing setup
│   ├── main.jsx           # React entry point
│   ├── index.css          # Tailwind CSS entry
│   ├── App.css            # Global styles
│   ├── assets/            # Product images
│   ├── myComponent/       # All main UI components
│   │   ├── cart/          # Cart and cart item display
│   │   ├── category/      # Category browsing
│   │   ├── Clothes/       # Clothes section
│   │   ├── features/      # Featured products and UI features
│   │   ├── frontpage/     # Navbar, footer, intro, community
│   │   ├── home/          # Home page
│   │   ├── productList/   # Product data
│   │   ├── Shop/          # Shop, product details, selectors
│   │   └── Toggle-btn/    # Theme toggle (dark/light)
│   └── photos/            # Additional images (if any)
├── tailwind.config.js     # Tailwind CSS config
├── vite.config.js         # Vite config
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

---

## 🧩 Main Components & Folders

### `src/App.jsx`
- Sets up the main routes: Home, Shop, Cart, Community.
- Manages global state for cart items and selected product details.

### `src/main.jsx`
- React entry point, renders `<App />`.

### `src/index.css`
- Imports Tailwind CSS base, components, and utilities.

---

### `src/myComponent/`

#### `cart/`
- **Cart.jsx**: Displays a single cart item with quantity controls and delete button.
- **Mycart.jsx**: Renders the shopping cart page, manages item quantities, and handles item removal.
- **CartItems.jsx**: (If present) Used for rendering individual cart item details.

#### `category/`
- **category.jsx**: Displays product categories (Clothes, Accessories, Shoes, Home appliances) with images and counts.
- **catogo.jsx**: Renders a single category card.

#### `Clothes/`
- **Clothes.jsx**: (If present) Displays clothing products.

#### `features/`
- **FeaturedFilter.jsx**: Shows featured products (e.g., price >= 9000).
- **features.jsx**: (If present) Additional feature components.
- **uiFeatures.jsx**: Renders product cards for the shop, handles product detail modal.

#### `frontpage/`
- **navbar.jsx**: Main navigation bar with links, search, cart icon, and theme toggle.
- **footer.jsx**: Footer with shop info, links, and support.
- **introduction.jsx**: Hero section with new collection, stats, and call-to-action.
- **community.jsx**: (If present) Community or contact section.
- **Navbar.css**: Styles for the navbar.

#### `home/`
- **Home.jsx**: Home page layout, includes navbar, intro, categories, featured products, community, and footer.

#### `productList/`
- **productList.js**: Exports an array of product objects (name, title, category, image, price, discount, rating).

#### `Shop/`
- **Shop.jsx**: Main shop page, category and price filtering, product grid, and product details modal.
- **ProductDetails.jsx**: Modal for viewing and adding a product to the cart.
- **ShopSelector.jsx**: UI for selecting category and price filters.
- **SelectorUI.jsx**: (If present) Additional selector UI.
- **allProduct.jsx**: (If present) Displays all products.
- **priceRange/**: Price range filter components.

#### `Toggle-btn/`
- **ThemeContext.js**: Context for theme (dark/light mode).
- **Toggle.jsx**: Theme toggle button.

---

## 🛒 Features

- **Home Page:** Introduction, categories, featured products, and community section.
- **Shop Page:** Browse products by category, view product details, and add to cart.
- **Cart:** View, update quantity, and remove items from the cart.
- **Category Browsing:** Filter products by category.
- **Featured Products:** Highlighted products based on price.
- **Theme Toggle:** Switch between dark and light modes.
- **Responsive Design:** Works well on desktop and mobile.
- **Routing:** Client-side navigation with React Router.

---

## ⚙️ Configuration

- **Tailwind CSS:** Configured via `tailwind.config.js` and imported in `index.css`.
- **Vite:** Used for fast development and build.
- **Assets:** Product images are stored in `src/assets/`.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm run dev
   ```
3. **Open in browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

---

## 📝 Customization

- **Add/Edit Products:** Update `src/myComponent/productList/productList.js`.
- **Add Categories:** Update `src/myComponent/category/category.jsx` and images in `photos/`.
- **Change Theme:** Edit `ThemeContext.js` and `Toggle.jsx`.
- **Update Styles:** Use Tailwind utility classes in your components.

---

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## 📚 Notes

- All UI is built with reusable React components.
- State management is handled with React hooks.
- Product and cart data are managed in the main `App.jsx` and passed as props.
- The project is easily extendable for new features or pages.

---

Feel free to adjust any details as your project evolves!
