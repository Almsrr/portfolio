import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="container">
        <div className="block logo-block">
          <StaticImage
            src="../images/as-logo-color.png"
            alt="alam-sierra-logo"
            width={70}
            height={70}
            layout="fixed"
            placeholder="dominantColor"
          />
        </div>
        <div className="block links-block">
          <div className="links">
            <Link to="#home">Home</Link>
            <Link to="#services">Services</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#stack">Stack</Link>
            <Link to="#contact">Contact</Link>
          </div>
        </div>
        <div className="block actions-block">
          <div className="actions">
            {/* <button type="button">EN</button>
            <button type="button">ES</button> */}
            <button type="button">Light - Dark</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
