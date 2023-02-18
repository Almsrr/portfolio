import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__block">
            <p className="navbar__logo">Logo</p>
          </div>
          <div className="navbar__block">
            <div className="navbar__links">
              <Link to="#home">Home</Link>
              <Link to="#services">Services</Link>
              <Link to="#projects">Projects</Link>
              <Link to="#stack">Stack</Link>
              <Link to="#contact">Contact</Link>
            </div>
          </div>
          <div className="navbar__block">
            <div className="navbar__actions">
              <button type="button">EN</button>
              <button type="button">ES</button>
              <button type="button">Light - Dark</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
