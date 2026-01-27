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
