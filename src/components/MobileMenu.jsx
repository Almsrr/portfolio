import { navigate } from "gatsby";
import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../hooks";

export default function MobileMenu({ onToggleMenu }) {
  const { theme, toggleTheme, isDarkThemeActive } = useSiteContext();

  const navigateTo = (path) => {
    onToggleMenu();
    navigate(path);
  };

  const themeBtnLabel = `switch to ${theme === "LIGHT" ? "dark" : "light"}`;
  const iconClassName = classNames("bx", {
    "bx-sun": isDarkThemeActive,
    "bx-moon": !isDarkThemeActive,
  });

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
      <div className="config">
        <button onClick={toggleTheme} type="button" className="theme-btn">
          <span>{themeBtnLabel}</span> <i className={iconClassName} />
        </button>
      </div>
    </div>
  );
}
