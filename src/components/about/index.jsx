//internal import
import "./style.css";
import { Layer, Peanut, Pie, Vanilla } from "../../assets/images/index.js";

//about
function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="section-tag">About us</span>
          <h2>Crafted with care, baked with heart.</h2>
          <p>
            We have been creating artisanal cakes and pies for family
            gatherings, birthdays, and everyday indulgence. Every recipe is
            tested, refined, and made from ingredients chosen for flavor,
            freshness, and comfort.
          </p>
          <p>
            From buttery crusts to delicate frosting, every bite is designed to
            feel personal, warm, and memorable.
          </p>
        </div>

        <div className="about-points">
          <div className="point-card">
            <strong>Small batches</strong>
            <span>Freshly prepared every day</span>
          </div>
          <div className="point-card">
            <strong>Natural ingredients</strong>
            <span>Thoughtfully sourced and seasonal</span>
          </div>
          <div className="point-card">
            <strong>Made for moments</strong>
            <span>Perfect for gifting or gathering</span>
          </div>
        </div>

        <div className="about-offers">
          <div className="offer-card">
            <span className="section-tag">OUR OFFERINGS</span>
          </div>
          <div className="offer-card">
            <div>
              <strong>Cakes</strong>
              <ul>
                <li>Layered Cakes</li>
                <li>Cup Cakes</li>
                <li>Bento Cakes</li>
                <li>Loaf Cakes</li>
                <li>Parfait Cakes</li>
                <li>Custom Cakes</li>
              </ul>
            </div>
            <img src={Layer} alt="Layered Cake" />
          </div>
          <div className="offer-card">
            <div>
              <strong>Pies</strong>
              <ul>
                <li>Apple Pie</li>
                <li>Blueberry Pie</li>
                <li>Cherry Pie</li>
                <li>Pumpkin Pie</li>
                <li>Key Lime Pie</li>
                <li>Custom Pies</li>
              </ul>
            </div>
            <img src={Pie} alt="Pumpkin Pie" />
          </div>

          <div className="offer-card">
            <div>
              <strong>Cookies</strong>
              <ul>
                <li>Chocolate Chip</li>
                <li>Oatmeal Raisin</li>
                <li>Peanut Butter</li>
                <li>Snickerdoodle</li>
                <li>Shortbread</li>
                <li>Custom Cookies</li>
              </ul>
            </div>
            <img src={Peanut} alt="Peanut Butter Cookies" />
          </div>

          <div className="offer-card">
            <div>
              <strong>Cakes Flavors</strong>
              <ul>
                <li>Vanilla</li>
                <li>Chocolate</li>
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Carrot</li>
                <li>Custom Flavors</li>
              </ul>
            </div>
            <img src={Vanilla} alt="Vanilla Cake" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
