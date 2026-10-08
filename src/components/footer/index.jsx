//internal import
import "./style.css";
import { Instagram, Facebook, X } from "../../assets/images/index.js";

//footer
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Cravings_By_Umi</p>
        <div className="footer-links">
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
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
    </footer>
  );
}

export default Footer;
