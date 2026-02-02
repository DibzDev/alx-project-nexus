"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["all", "phones", "tvs", "kitchen", "appliances"];

export default function HomePage() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // ✅ Combined filtering
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "all" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Smart Electronics <br /> For Modern Living
          </h1>
          <p>
            Kheir Electronics brings you quality TVs, phones, kitchen appliances
            and smart home devices — affordable, reliable, and built to last.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn primary">
              Shop Products
            </a>
            <a href="#categories" className="btn secondary">
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Featured Products
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80 px-4 py-2 border rounded mb-6"
          />

          {/* Categories */}
          <div
            id="categories"
            className="flex gap-3 mb-10 overflow-x-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full border capitalize whitespace-nowrap ${
                  category === cat
                    ? "bg-yellow-500 text-black"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
<div className="w-full">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>


          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products found
            </p>
          )}
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <h2>Why Choose Kheir Electronics?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery across the country.</p>
          </div>
          <div className="why-card">
            <h3>Genuine Products</h3>
            <p>We only sell original and certified electronics.</p>
          </div>
          <div className="why-card">
            <h3>Customer Support</h3>
            <p>Friendly support available whenever you need help.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Kheir Electronics</h3>
            <p>Your trusted electronics store.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📍 Mombasa, Kenya</p>
            <p>📞 +254 113 013 792</p>
          </div>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Kheir Electronics. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
