# ShopByMe – Ecommerce React App

ShopByMe is a modern, responsive E-commerce web application built with React, Vite, and Tailwind CSS. It features a modular component structure, category-based product browsing, a shopping cart, and a clean, user-friendly interface.

---

## 📁 Project Structure

```
shopbyme/
│
├── dist/                   # Built app (production output after `npm run build`)
├── index.html            # Root HTML shell (Vite entry)
├── src/
│   ├── App.jsx           # Routes, layouts, wraps providers
│   ├── main.jsx           # React entry point
│   ├── index.css          # Tailwind CSS entry
│   ├── App.css            # Global / app-wide styles
│   ├── ThemeContext.jsx   # Dark / light theme context provider
│   ├── CartContext.jsx    # Shopping cart context provider
│   ├── assets/            # Product images used in listings
│   ├── photos/           # Category, hero, logo, cart UI images
│   └── myComponent/       # Page and feature UI
│       ├── cart/          # Cart page and cart line items
│       ├── category/      # Category grid and cards
│       ├── Clothes/       # Clothes-focused view / section
│       ├── features/      # Featured products and shop card UI
│       ├── frontpage/     # Navbar, footer, intro, contact
│       ├── home/          # Home page composition
│       ├── productList/   # Product data (`productList.js`)
│       ├── Shop/          # Shop, filters, details, all products
│       │   └── priceRange/# Price-range filter controls
│       └── Toggle-btn/    # Theme toggle component + helper context import
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js        # Vite bundler configuration
├── package.json           # Scripts and dependency list
├── package-lock.json      # Locked dependency versions
└── README.md              # Project documentation
```

---

## 🧩 Main Components & Folders

### `src/App.jsx`
- Sets up the main routes (Home, Shop, Cart, Community) and wraps the app with theme and cart providers.

### `src/main.jsx`
- React entry point; mounts `<App />` into `index.html`.

### `src/ThemeContext.jsx` & `src/CartContext.jsx`
- **`ThemeContext.jsx`**: shares theme state (dark/light) and `handleThemeToggle` with the tree via `ThemeProvider`.
- **`CartContext.jsx`**: shares `cartItems`, add-to-cart helpers, and `itemDetails` for product detail flows.

### `src/index.css`
- Imports Tailwind CSS base, components, and utilities.

---

### `src/myComponent/`

#### `cart/`
- **Cart.jsx**: Single line item row (quantity controls, remove).
- **Mycart.jsx**: Shopping cart route—lists items and adjusts totals / removal.
- **CartItems.jsx**: Cart line presentation helpers reused by **`Mycart.jsx`**.

#### `category/`
- **category.jsx**: Displays product categories (Clothes, Accessories, Shoes, Home appliances) with images and counts.
- **catogo.jsx**: Renders a single category card.

#### `Clothes/`
- **Clothes.jsx**: Clothing-category page or section for the apparel collection.

#### `features/`
- **FeaturedFilter.jsx**: Shows featured products (e.g., price threshold filter).
- **features.jsx**: Feature-related compose components.
- **uiFeatures.jsx**: Product card UI used in shop flows (including detail interaction).

#### `frontpage/`
- **navbar.jsx**: Top navigation—links, search, cart icon, theme toggle (`Navbar.css`).
- **footer.jsx**: Footer with shop info and links.
- **introduction.jsx**: Hero / landing section above the fold.
- **community.jsx**: Contact-focused content for the Community route.

#### `home/`
- **Home.jsx**: Home page layout, includes navbar, intro, categories, featured products, community, and footer.

#### `productList/`
- **productList.js**: Static product catalogue (each item includes name, category, `background`/image binding, pricing, discounts, ratings).

#### `Shop/`
- **Shop.jsx**: Shop page shell—filters, grid, ties into product detail.
- **ProductDetails.jsx**: Product detail overlay / modal and add-to-cart entry.
- **ShopSelector.jsx** & **SelectorUI.jsx**: Category and filter controls.
- **allProduct.jsx**: Renders full product grids when showing everything.
- **priceRange/**: **PriceRange.jsx** / **PriceRangeBTN.jsx** for min–max pricing.

#### `Toggle-btn/`
- **Toggle.jsx**: Styled dark/light checkbox toggle used in the navbar.
- **ThemeContext.js**: Navbar-side theme context wiring used alongside the root **`src/ThemeContext.jsx`** provider.

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
- **Assets:** Product images live in **`src/assets/`**; **`src/photos/`** holds category and marketing visuals referenced from category and layout components.

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
