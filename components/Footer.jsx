// Footer.js
import { useMediaQuery } from "react-responsive";
import React from "react";
import style from "./Footer.module.css"; // Import your CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"; // Import social media icons

function Footer() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  return (
    <footer>
      <div className={isTabletOrMobile ? style.footer_small : style.footer}>
        <div className={isTabletOrMobile ? style.column : style.column_small}>
          <h3>Despre noi</h3>
          <p>Cateva click-uri iti pot salva viata.</p>
        </div>

        <div className={isTabletOrMobile ? style.column : style.column_small}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Acasa</a>
            </li>
            <li>
              <a href="#">Despre</a>
            </li>
          </ul>
        </div>

        <div className={isTabletOrMobile ? style.column : style.column_small}>
          <h3>Politica de confidentialitate</h3>
          <p>Va rugam sa fiti confidentiali.</p>
        </div>

        <div className={isTabletOrMobile ? style.column : style.column_small}>
          <h3>Contact Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className={style.copy}>
        <p>&copy; 2024 TWOMANDREAMER. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
