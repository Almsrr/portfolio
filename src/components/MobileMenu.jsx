import React from "react";

export default function MobileMenu({ onToggleMenu }) {
  return (
    <div className="mobile-menu">
      <p>This is the mobile menu</p>
      <ul className="links">
        <li onClick={onToggleMenu}>a</li>
        <li onClick={onToggleMenu}>b</li>
      </ul>
    </div>
  );
}
