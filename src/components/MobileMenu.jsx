import { navigate } from "gatsby";
import React from "react";

import { useSiteContext } from "../hooks";

export default function MobileMenu({ onToggleMenu }) {
  const { toggleTheme } = useSiteContext();

  const navigateTo = (path) => {
    onToggleMenu();
    navigate(path);
  };

  return (
    <div className="mobile-menu">
      <h2>Menu</h2>
      <div className="buttons">
        <button onClick={navigateTo.bind(null, "#home")} type="button">
          Home
        </button>
        <button onClick={navigateTo.bind(null, "#services")} type="button">
          Services
        </button>
        <button onClick={navigateTo.bind(null, "#projects")} type="button">
          Projects
        </button>
        <button onClick={navigateTo.bind(null, "#stack")} type="button">
          Stack
        </button>
        <button onClick={navigateTo.bind(null, "#contact")} type="button">
          Contact
        </button>
      </div>
    </div>
  );
}
