# ATELIER — Modern Clothing & Essentials

ATELIER is a modern clothing e-commerce website built with **React** and **Vite**. It features a clean, modern design where users can browse clothing, explore products, manage their shopping carts, and discover curated collections.

## Features

- **Home Page:** Seasonal hero section, featured collections, new arrivals, and bestsellers.
- **Shop Page:** Browse products with search, filtering, and sorting functionality.
- **Product Details:** Product images, size and color selection, and quantity controls.
- **Shopping Cart:** Add products, update quantities, remove items, and apply coupons.
- **Wishlist:** Save favorite products.
- **Account Page:** User account interface.
- **Checkout Page:** Checkout interface for the shopping process.
- **Responsive Design:** Layout and navigation designed for different screen sizes.
- **Toast Notifications:** Display feedback and notifications to users.
- **Local Storage:** Preserve shopping cart data and applied coupons between browser sessions.
- **Reusable Components:** Organized React components for product cards, navigation, filters, modals, and cart functionality.
- **Additional Pages:** About, Contact, and FAQ pages.

**Note:** This is a frontend project. A production-ready e-commerce website would require a secure backend for authentication, inventory management, order processing, and payment integration.

## Tech Stack

- **React 19** — Building interactive user interfaces.
- **Vite** — Development server and build tool.
- **React Router** — Client-side navigation.
- **Bootstrap 5** — Layout and utility styling.
- **Lucide React** — Icons.
- **CSS** — Custom styling and responsive layouts.
- **Local Storage** — Persisting selected shopping data in the browser.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### Installation

**1. Install the dependencies**

Open the project folder in your terminal and run:

```bash
npm install
```

**2. Start the development server**

```bash
npm run dev
```

**3. Open the website**

Open the local URL displayed in your terminal. It is usually:

`http://localhost:5173`

### Build for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

To run the project's linter, use:

```bash
npm run lint
```

## Main Pages

| Route | Description |
|---|---|
| `/` | Home page and featured collections |
| `/shop` | Browse, search, filter, and sort products |
| `/product/:slug` | Individual product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout interface |
| `/account` | Account interface |
| `/about` | About the brand |
| `/contact` | Contact page |
| `/faq` | Frequently asked questions |

## Project Structure

```text
src/
├── components/
│   ├── cart/       # Shopping cart components
│   ├── common/     # Header, footer, search, menus, and modals
│   ├── product/    # Product cards, galleries, and grids
│   └── shop/       # Product filters and sorting
├── context/        # Cart, wishlist, authentication, and toast state
├── data/           # Product catalog, categories, and coupons
├── pages/          # Website pages
├── styles/         # Shared styling
├── App.jsx         # Application layout and routes
├── App.css         # Application styles
├── index.css       # Global styles
└── main.jsx        # React entry point
```

## Product Data

The product catalog is maintained in `src/data/products.js`.

Category information is maintained in `src/data/categories.js`, while coupon definitions are maintained in `src/data/coupons.js`.

Product images use remote Unsplash image URLs, so an internet connection may be required for them to load.

## Customization

You can customize the project by editing the following files:

- `src/data/products.js` — Add, remove, or modify products.
- `src/data/categories.js` — Update product categories.
- `src/data/coupons.js` — Modify coupon definitions.
- `src/styles/style.css` — Customize shared styles.
- `src/App.css` — Customize application styles.
- `src/index.css` — Modify global styles.
- `src/App.jsx` — Add or modify application routes.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Future Improvements

- Integrate a backend and database.
- Implement secure user authentication.
- Connect a payment gateway.
- Add order tracking and order history.
- Improve product recommendations.
- Add inventory management.

## License

No license has been specified for this project. Add a `LICENSE` file if you intend to publish it for reuse.
