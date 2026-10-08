//internal import
import { useState, useEffect } from "react";
import "./style.css";
import { images } from "../../assets/images/index.js";

//navbar
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <div>
          <img src={images} alt="Cravings_By_Umi logo" aria-label="logo" />
          <a href="#home" className="brand">
            Cravings_By_Umi.
          </a>
          <p className="tagline">Where every bite counts</p>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-menu"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>

        <ul
          id="primary-menu"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#contact" className="nav-button">
          Order Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
