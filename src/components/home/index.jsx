//internal import
import "./style.css";
import { Instagram, Facebook, X, HeroCake } from "../../assets/images/index.js";

//home
function Home() {
  return (
    <section id="home" className="home-section section">
      <div className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">Freshly baked daily</span>
          <h1>
            Sweet moments made for every <em>celebration</em>.
          </h1>
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
            <div>
              <strong>10+</strong>
              <span>Years of experience</span>
            </div>
          </div>
          <div className="hero-social">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={X} alt="X" />
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Cake display"
          style={{ backgroundImage: `url(${HeroCake})` }}
        >
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
