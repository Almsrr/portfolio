import { navigate } from "gatsby";
import React from "react";
import classNames from "classnames";

export default function MobileMenu({
  isDarkActive,
  onToggleTheme,
  isVisible,
  onToggleMenu,
}) {
  const navigateTo = (path) => {
    onToggleMenu();
    navigate(path);
  };

  const themeBtnLabel = `switch to ${!isDarkActive ? "dark" : "light"}`;
  const iconClassName = classNames("bx", {
    "bx-sun": isDarkActive,
    "bx-moon": !isDarkActive,
  });

  const menuClassName = classNames("mobile-menu", {
    "visible": isVisible,
  });

  return (
    <div className={menuClassName}>
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
        <button onClick={onToggleTheme} type="button" className="theme-btn">
          <span>{themeBtnLabel}</span> <i className={iconClassName} />
        </button>
      </div>
    </div>
  );
}
