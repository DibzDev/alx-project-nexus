import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Smart Electronics <br />
            For Modern Living
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
      {/* Products section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">
      Featured Products
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>

{/* Why Choose Us section */}
<section className="why-us">
  <h2>Why Choose Kheir Electronics?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>🚚 Fast Delivery</h3>
      <p>Quick and reliable delivery across the country.</p>
    </div>

    <div className="why-card">
      <h3>✅ Genuine Products</h3>
      <p>We only sell original and certified electronics.</p>
    </div>

    <div className="why-card">
      <h3>📞 Customer Support</h3>
      <p>Friendly support available whenever you need help.</p>
    </div>
  </div>
</section>

{/* Footer section */}
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