# Amazon Clone
 
A fully functional front-end e-commerce web application inspired by Amazon, built with **vanilla JavaScript** using modern ES Modules, OOP principles, and async/await patterns.
 
---
 
## Pages
 
| Page | Description |
|------|-------------|
| **Home (`amazon.html`)** | Browse a dynamic product grid loaded from a backend API |
| **Checkout (`checkout.html`)** | Review cart items, update quantities, select delivery options |
| **Orders (`orders.html`)** | View past order history with product details and delivery dates |
| **Tracking (`tracking.html`)** | Track individual package delivery status |
 
---
 
## Features
 
- **Dynamic Product Grid** — Products are fetched from a live REST API and rendered dynamically, with responsive grid layout across all screen sizes
- **Add to Cart** — Select quantity and add any product to the cart; shows a brief "Added ✓" confirmation animation
- **Persistent Cart** — Cart state is saved to `localStorage` so it survives page refreshes
- **Checkout Page** — Full order review with the ability to update quantities, delete items, and choose from 3 delivery speed options
- **Delivery Options** — 3 tiered shipping options (FREE 7-day, $4.99 5-day, $9.99 1-day) with smart weekend-skipping delivery date calculation using [Day.js](https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js)
- **Payment Summary** — Live-calculated subtotal, shipping, 10% tax, and order total
- **Place Order** — Submits cart to a backend API, saves the order to `localStorage`, and redirects to the Orders page
- **Order History** — Displays all past orders with product images, delivery dates, quantities, and order totals
- **Package Tracking** — Clicking "Track Package" opens a tracking page showing delivery status (Preparing → Shipped → Delivered) with a visual progress bar
- **OOP Architecture** — Products are modeled with a `Product` base class and `Clothing` / `Appliances` subclasses that inject type-specific UI (size chart links, instruction/warranty links)
- **Responsive Design** — CSS Grid with `@media` breakpoints for screen widths from 450px up to 2000px+
 
---
 
## Project Structure
 
```
├── amazon.html          # Home / product listing page
├── checkout.html        # Shopping cart & checkout
├── orders.html          # Order history
├── tracking.html        # Package tracking
│
├── data/
│   ├── products.js      # Product class hierarchy + API fetch
│   ├── cart.js          # Cart state, localStorage persistence, XHR loader
│   ├── cart-oop.js      # OOP refactor of cart (practice)
│   ├── orders.js        # Order state + localStorage persistence
│   └── deliveryOptions.js  # Delivery tiers + date calculation (Day.js)
│
├── scripts/
│   ├── amazon.js        # Home page rendering & add-to-cart logic
│   ├── checkout.js      # Checkout page orchestration (async/await)
│   ├── orderCheckIn.js  # Orders page rendering
│   ├── tracking.js      # Tracking page rendering from URL params
│   ├── checkout/
│   │   ├── orderSummary.js   # Cart items, delivery options, quantity editing
│   │   └── paymentSummary.js # Price calculations + place order
│   └── utils/
│       └── utils.js     # currencyFormat helper
│
└── styles/
    ├── shared/          # General styles, Amazon header
    └── pages/           # Page-specific CSS (amazon, orders, tracking, checkout)
```
 
---
 
## Tech Stack
 
- **Vanilla JavaScript** (ES Modules, Classes, async/await, Fetch API, XMLHttpRequest)
- **HTML5 & CSS3** (CSS Grid, Flexbox, Media Queries)
- **Day.js** (via CDN — delivery date calculation)
- **REST API** — [`supersimplebackend.dev`](https://supersimplebackend.dev) for products, cart, and orders
 
---
 
## Getting Started
 
Since this project uses ES Modules, it must be served over HTTP (not opened directly as a file).
 
### Using VS Code Live Server
1. Clone or download the repository
2. Open the project folder in VS Code
3. Right-click `amazon.html` → **Open with Live Server**
 
### Using Python
```bash
# Python 3
python -m http.server 5500
```
Then visit `http://localhost:5500/amazon.html`
 
### Using Node.js
```bash
npx serve .
```
 
---
 
## Concepts Practiced
 
- ES Module imports/exports
- Object-Oriented Programming (inheritance, polymorphism)
- Async programming — Promises, async/await, Promise.all
- Fetch API & XMLHttpRequest
- DOM manipulation & event delegation
- localStorage for client-side persistence
- URL query parameters for page-to-page data passing
- Responsive CSS Grid layout
