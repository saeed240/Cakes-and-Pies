import "./style.css";

function Home() {
  return (
    <section id="home" className="home-section section">
      <div className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">Freshly baked daily</span>
          <h1>Sweet moments made for every celebration.</h1>
          <p>
            From elegant cakes to comforting pies, we craft handcrafted desserts
            that turn ordinary days into unforgettable memories.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-btn">
              Explore Menu
            </a>
            <a href="#about" className="secondary-btn">
              Our Story
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>15k+</strong>
              <span>Happy customers</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Signature flavors</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Cake display">
          <div className="cake-card cake-card-large">
            <span className="cake-badge">Best Seller</span>
            <h3>Berry Bliss</h3>
            <p>Vanilla sponge · berry cream · silky glaze</p>
          </div>
          <div className="cake-card cake-card-small">
            <h3>Golden Apple</h3>
            <p>Warm spice · flaky crust</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
