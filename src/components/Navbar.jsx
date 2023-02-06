import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <Link to="#home">Home</Link>
      <Link to="#services">Services</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#stack">Stack</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  );
}
