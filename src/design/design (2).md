# design.md — Clothing Store Website

## 1. Overview
An online clothing and accessories store selling **shirts, t-shirts, pants, trousers, bags, and shoes**.
Goal: a clean, modern, fast, mobile-first shopping experience that makes browsing and buying effortless.

- **Brand name:** [YOUR BRAND NAME]
- **Tone:** Minimal, confident, premium-but-approachable
- **Audience:** Men and women, 18–45, mostly shopping on mobile
- **Currency:** [PKR / USD — set one]

---

## 2. Design Principles
1. **Product first** – large, clean photography; UI stays out of the way.
2. **Whitespace** – generous spacing, never cluttered.
3. **Mobile first** – design for 375px, then scale up.
4. **Fast** – lazy-load images, optimized formats (WebP/AVIF), minimal JS.
5. **Accessible** – WCAG AA contrast, keyboard navigable, clear focus states.

---

## 3. Color Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Ink Black | `#111111` |
| Secondary | Warm Stone | `#F5F2EE` |
| Accent | Terracotta | `#C8553D` |
| Background | White | `#FFFFFF` |
| Surface / Cards | Soft Gray | `#F7F7F7` |
| Border | Light Gray | `#E5E5E5` |
| Text – primary | Charcoal | `#1A1A1A` |
| Text – muted | Gray | `#6B6B6B` |
| Success | Green | `#2E7D32` |
| Error / Sale | Red | `#D32F2F` |

**Usage:** Black for primary buttons and headings, Terracotta only for highlights (sale tags, hover accents, key CTAs), Warm Stone for section backgrounds.

---

## 4. Typography
- **Headings:** `Playfair Display` (or `DM Serif Display`) — elegant, editorial
- **Body / UI:** `Inter` (or `Poppins`) — clean and readable
- Fallback: `system-ui, -apple-system, sans-serif`

| Element | Size (desktop / mobile) | Weight |
|---|---|---|
| H1 | 56px / 36px | 700 |
| H2 | 40px / 28px | 600 |
| H3 | 28px / 22px | 600 |
| Body | 16px / 16px | 400 |
| Small / caption | 13–14px | 400 |
| Button | 15px, uppercase, letter-spacing 0.05em | 600 |

---

## 5. Layout & Spacing
- **Grid:** 12 columns desktop, 4 columns mobile
- **Max content width:** 1280px, centered
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 96px
- **Border radius:** 6px (inputs, buttons), 12px (cards)
- **Breakpoints:** 480px · 768px · 1024px · 1280px
- **Product grid:** 2 cols (mobile) → 3 (tablet) → 4 (desktop)

---

## 6. Site Structure

```
Home
├── Shop All
├── Clothing
│   ├── Shirts
│   ├── T-Shirts
│   ├── Pants
│   └── Trousers
├── Bags
├── Shoes
├── Sale
├── About
├── Contact
├── Account (Login / Register / Orders / Wishlist)
├── Cart
└── Checkout
```

---

## 7. Pages

### 7.1 Home
1. **Announcement bar** – free shipping / sale message
2. **Header** – logo (center or left), nav, search, account, wishlist, cart (with count badge)
3. **Hero** – full-width banner image, headline, subtext, 1–2 CTA buttons ("Shop Men", "Shop Women")
4. **Category tiles** – 6 large image cards: Shirts, T-Shirts, Pants, Trousers, Bags, Shoes
5. **New Arrivals** – horizontal product carousel
6. **Promo banner** – seasonal sale / collection
7. **Best Sellers** – product grid
8. **Why shop with us** – 3–4 icons (Free delivery, Easy returns, Secure payment, Quality guarantee)
9. **Instagram / lookbook strip** – 6 images
10. **Newsletter signup**
11. **Footer** – links, social icons, payment icons, contact info

### 7.2 Category / Listing Page
- Breadcrumbs, page title, product count
- **Filters (sidebar on desktop, drawer on mobile):** size, color, price range, brand, availability, rating
- **Sort:** newest, price low→high, price high→low, popularity
- Product grid with pagination or "Load more"

### 7.3 Product Detail Page
- Image gallery (main image + thumbnails, zoom on hover, swipe on mobile)
- Product name, price (with strike-through if on sale), rating
- Color swatches, size selector (with size guide link), quantity
- **Add to Cart** (primary) and **Add to Wishlist**
- Accordion: Description · Material & Care · Shipping & Returns
- Reviews section
- "You may also like" carousel

### 7.4 Cart
- Line items (image, name, size/color, qty stepper, price, remove)
- Order summary: subtotal, shipping estimate, discount code, total
- Checkout button

### 7.5 Checkout
- Single-page, 3 steps: Contact → Shipping → Payment
- Guest checkout allowed
- Order summary sticky on desktop
- Payment options: Card, Cash on Delivery, [local wallets]

### 7.6 Account
- Login / Register, order history, saved addresses, wishlist, profile

### 7.7 Static Pages
- About, Contact (form + map), FAQ, Shipping & Returns, Privacy Policy, Terms

---

## 8. Components

### Buttons
- **Primary:** black bg, white text, hover → `#333`
- **Secondary:** white bg, black 1px border, hover → black bg / white text
- **Accent:** terracotta bg, white text (use sparingly)
- Height 48px, padding 0 28px, radius 6px, 150ms transition

### Product Card
- Image (aspect ratio 3:4), second image on hover
- Wishlist heart (top right), badge (New / Sale –20%) top left
- Name (1–2 lines), price, optional color dots
- Quick-add button appears on hover (desktop)

### Header
- Sticky on scroll, shrinks slightly, white bg with subtle bottom border
- Mega menu on desktop for Clothing; hamburger drawer on mobile

### Forms
- 48px inputs, 1px border, 6px radius, visible labels, inline error messages in red

### Other
- Toast notifications (added to cart, errors)
- Mini cart slide-out drawer
- Modal for size guide and quick view
- Skeleton loaders for product grids
- Breadcrumbs, pagination, accordions, tabs, rating stars

---

## 9. Imagery & Iconography
- Photography: neutral backgrounds, natural light, consistent crop (3:4)
- Show models + flat-lay/detail shots per product (4–6 images)
- Icons: Lucide or Heroicons, 1.5px stroke, 20–24px
- Always add descriptive `alt` text

---

## 10. Motion & Interaction
- Subtle only: 150–250ms ease-out
- Image fade/zoom on hover, button color transitions
- Cart drawer slides in from right
- Respect `prefers-reduced-motion`

---

## 11. Product Data Model

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "category": "shirts | t-shirts | pants | trousers | bags | shoes",
  "gender": "men | women | unisex",
  "price": 0,
  "salePrice": null,
  "description": "string",
  "material": "string",
  "images": ["url"],
  "variants": [
    { "size": "M", "color": "Black", "sku": "string", "stock": 10 }
  ],
  "rating": 4.5,
  "reviewCount": 0,
  "tags": ["new", "bestseller"],
  "createdAt": "date"
}
```

**Sizing:** Clothing: XS–XXL · Pants/Trousers: waist 28–40 · Shoes: EU 36–46 · Bags: one size.

---

## 12. Features Checklist
- [ ] Search with autocomplete
- [ ] Filters and sorting
- [ ] Wishlist
- [ ] Cart (persisted) and mini cart
- [ ] Guest + account checkout
- [ ] Discount codes
- [ ] Reviews and ratings
- [ ] Size guide
- [ ] Order tracking
- [ ] Newsletter signup
- [ ] WhatsApp / chat button
- [ ] Multi-currency (optional)
- [ ] Admin dashboard (products, orders, customers, inventory)

---

## 13. Tech Stack (Required)

- **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), React
  - Bootstrap for grid, navbar, modals, offcanvas (mini cart / mobile menu), forms
  - Custom CSS (`assets/css/style.css`) overrides Bootstrap variables with the palette in Section 3
  - React (via Vite) for dynamic parts: product listing + filters, product detail, cart, checkout
  - Static pages (About, Contact, FAQ, policies) can stay plain HTML + Bootstrap
- **Backend:** Core PHP 8+ (**no Laravel / no framework**)
  - Simple custom structure: `/api` endpoints returning JSON, `/includes` helpers, `/config`
  - PDO with prepared statements for all queries
  - Sessions for auth, `password_hash()` / `password_verify()` for passwords
  - CSRF tokens, input validation, output escaping
- **Database:** MySQL (InnoDB, utf8mb4)
- **Server:** Apache (XAMPP / WAMP for local dev) with `.htaccess` for clean URLs
- **Payments:** Cash on Delivery first; Stripe / local gateway later

### Suggested Folder Structure

```
/project-root
├── /public                  # web root
│   ├── index.html
│   ├── /pages               # static HTML pages (about, contact, faq)
│   ├── /assets
│   │   ├── /css/style.css
│   │   ├── /js
│   │   └── /images
│   └── /app                 # built React app (Vite output)
├── /frontend                # React source (Vite)
│   └── /src
│       ├── /components      # ProductCard, Header, CartDrawer, FilterPanel...
│       ├── /pages           # Home, Listing, Product, Cart, Checkout, Account
│       ├── /hooks
│       └── /services        # fetch wrappers for the PHP API
├── /api                     # PHP endpoints
│   ├── products.php
│   ├── product.php
│   ├── categories.php
│   ├── cart.php
│   ├── auth/ (login.php, register.php, logout.php)
│   ├── orders.php
│   ├── wishlist.php
│   └── reviews.php
├── /admin                   # PHP admin panel (products, orders, customers)
├── /includes                # db.php, auth.php, helpers.php, csrf.php
├── /config                  # config.php (DB credentials, constants)
├── /uploads                 # product images
└── /database/schema.sql
```

### MySQL Schema (starting point)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  role ENUM('customer','admin') DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE,
  parent_id INT NULL,
  FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  gender ENUM('men','women','unisex') DEFAULT 'unisex',
  description TEXT,
  material VARCHAR(200),
  price DECIMAL(10,2) NOT NULL,
  sale_price DECIMAL(10,2) NULL,
  is_new TINYINT(1) DEFAULT 0,
  is_bestseller TINYINT(1) DEFAULT 0,
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE product_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE product_variants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  size VARCHAR(20),
  color VARCHAR(50),
  sku VARCHAR(60) UNIQUE,
  stock INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE cart_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  session_id VARCHAR(100) NULL,
  variant_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE CASCADE
);

CREATE TABLE wishlist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  UNIQUE KEY (user_id, product_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  customer_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  shipping DECIMAL(10,2) DEFAULT 0,
  discount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  payment_method ENUM('cod','card') DEFAULT 'cod',
  status ENUM('pending','confirmed','shipped','delivered','cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  variant_id INT NOT NULL,
  product_name VARCHAR(200) NOT NULL,
  size VARCHAR(20),
  color VARCHAR(50),
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  user_id INT NOT NULL,
  rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE coupons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(40) NOT NULL UNIQUE,
  type ENUM('percent','fixed') NOT NULL,
  value DECIMAL(10,2) NOT NULL,
  expires_at DATE NULL,
  is_active TINYINT(1) DEFAULT 1
);
```

### API Conventions
- All endpoints return JSON: `{ "success": true, "data": ..., "error": null }`
- Use proper HTTP status codes (200, 201, 400, 401, 404, 500)
- React calls the PHP API with `fetch()` (`credentials: "include"` for sessions)
- Enable CORS only for the dev origin when running Vite locally

### Security Checklist
- [ ] PDO prepared statements everywhere (no string-built SQL)
- [ ] `password_hash()` for passwords
- [ ] CSRF token on state-changing requests
- [ ] Validate and sanitize all input; escape all output
- [ ] Validate image uploads (type, size, rename files)
- [ ] Admin routes protected by role check
- [ ] DB credentials only in `/config`, never committed

---

## 14. SEO & Performance
- Semantic HTML, unique title/meta per page, clean URLs (`/shoes/white-sneakers`)
- Product schema (JSON-LD), sitemap, Open Graph tags
- Lighthouse target: 90+ across all categories
- Images in WebP/AVIF, lazy-loaded, explicit width/height to avoid layout shift

---

## 15. Accessibility
- Contrast ratio ≥ 4.5:1 for text
- Visible focus rings (2px terracotta outline)
- All interactive elements keyboard accessible
- ARIA labels on icon-only buttons
- Form errors announced to screen readers
