import React from "react";

export default function MobileMenu({ onToggleMenu }) {
  return (
    <div className="mobile-menu">
      <p>This is the mobile menu</p>
      <ul className="links">
        <li>
          <button onClick={onToggleMenu}>a</button>
        </li>
        <li>
          <button onClick={onToggleMenu}>b</button>
        </li>
      </ul>
    </div>
  );
}
