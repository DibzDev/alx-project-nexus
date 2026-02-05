# Kheir Electronics

## Project Overview

**Kheir Electronics** is a modern electronics product catalog web application built as part of the **ALX Project Nexus**. The project demonstrates practical frontend engineering skills using **Next.js**, **React**, and **Tailwind CSS**, with a strong focus on clean project structure, reusable components, and scalable data handling.

The application showcases a curated list of electronic products such as smartphones, laptops, home appliances, and accessories. Each product is displayed with essential details including name, price, category, image, and description. The long-term goal is to evolve this project into a fully functional E commerce platform.

---

## Purpose of the Project

This project is designed to:

* Apply concepts learned throughout the ALX Software Engineering Front End ProDev program
* Demonstrate real-world frontend development practices
* Show understanding of component based architecture in React
* Practice working with structured data and static assets
* Build a scalable foundation for future features such as cart, checkout, and authentication

Kheir Electronics is developed under the **alx-project-nexus** as a hands on, production style project rather than a simple demo.

---

## Features Implemented

* Product listing page with reusable product cards
* Centralized product data management
* Responsive layout (mobile-first approach)
* Static product images served from the public directory
* Clean and scalable project structure

---

## Tech Stack

* **Next.js** – React framework for server-side rendering and routing
* **React** – Component-based UI development
* **TypeScript** – Type safety and better developer experience
* **Tailwind CSS** – Utility-first styling
* **Vercel** - Production deployment platform
* **Git & GitHub** – Version control and collaboration

---

## Project Structure

```
kheir-electronics/
├── public/
│   └── products/          # Product images
|   └──...
├── src/
│   ├── app/               # Next.js app router
│   │   ├── globals.css
│   │   └── page.tsx
|   |   └──cart/.
|   |   └──checkout/..
|   |   └──products/..
│   │
│   ├── components/
│   │   └── layout/.        # Reusable UI components
│   │   └── AddToCartButton.tsx
│   │   └── CartBadge.tsx
│   │   └── Header.tsx
│   │   └── Navbar.tsx
│   │   └── ProductCard.tsx
│   │
│   ├── lib/               # Shared logic and data
│   │   └── products.ts
│   │   └── cart.ts
│
├── tailwind.config.js
├── package.json
└── README.md
```

---

## How Products Are Managed

All product data is stored in:

```
src/lib/products.ts
```

Each product object includes:

* `id`
* `name`
* `price`
* `category`
* `image`
* `description`

To add new products:

1. Add the product image to `public/products/`
2. Add a new product object in `src/lib/products.ts`
3. Ensure the image path matches the filename exactly

---

## How to Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/DibzDev/alx-project-nexus
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:3000
```


5. Production deployment platform:
```bash
npm run build
```
---

## Deployment

* The project is deployed using Vercel, ensuring:

* Fast global delivery

* Automatic CI/CD on push

* Optimized production builds

Live Demo: (https://vercel.com/toms-projects-6ead9b3a/alx-project-nexus)

## Current Limitations

* Product grid layout is still being refined
* No product detail pages yet
* No cart or checkout functionality
* No backend or database integration

These limitations are intentional at this stage to focus on frontend foundations.

---

## Future Enhancements

* Product details pages using dynamic routes
* Category-based filtering
* Shopping cart and checkout flow
* Backend integration (database & API)
* User authentication
* Admin dashboard for product management

---

## Author

**Tom Musyoka Mwaduka**
ALX Software Engineering Front End ProDev Student

---

## Project Status

**In Active Development**
This project is continuously being improved as part of the ALX learning journey.
