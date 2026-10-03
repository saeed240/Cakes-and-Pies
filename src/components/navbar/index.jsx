//internal import
import "./style.css";
import images from "../../logos/images.png";

//navbar
function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <div>
          <img src={images} alt="Cravings_By_Umi logo" aria-label="logo" />
          <a href="#home" className="brand" aria-label="Cravings_By_Umi home">
            Cravings_By_Umi.
          </a>
          <p className="tagline">Where every bite counts</p>
        </div>

        <ul className="nav-links">
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
