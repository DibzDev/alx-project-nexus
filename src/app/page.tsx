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
    </main>
  );
}

{/* Products section */}
<section className="products">
  <h2>Featured Products</h2>

  <div className="product-grid">
    <div className="product-card">
      <img src="/images/phone.jpg" alt="Smartphone" />
      <h3>Smartphone X</h3>
      <p className="price">KSh 28,000</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src="/images/tv.jpg" alt="Smart TV" />
      <h3>43” Smart TV</h3>
      <p className="price">KSh 42,000</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src="/images/laptop.jpg" alt="Laptop" />
      <h3>Core i5 Laptop</h3>
      <p className="price">KSh 65,000</p>
      <button>Add to Cart</button>
    </div>
  </div>
</section>
