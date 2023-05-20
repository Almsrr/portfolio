import React from "react";
import classNames from "classnames";

import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import { useSiteContext } from "../hooks";

export default function Layout({ children }) {
  const { isDarkThemeActive, showMobileMenu, toggleMobileMenu, toggleTheme } =
    useSiteContext();

  const layoutClasses = classNames("site-layout", {
    "menu-open": showMobileMenu,
    "light-theme": !isDarkThemeActive,
    "dark-theme": isDarkThemeActive,
  });

  return (
    <div className={layoutClasses}>
      <div className="burger-btn-container">
        <BurgerButton
          menuIsVisible={showMobileMenu}
          onClick={toggleMobileMenu}
        />
      </div>
      <div className="mobile-menu-container">
        <MobileMenu
          isDarkActive={isDarkThemeActive}
          isVisible={showMobileMenu}
          onToggleMenu={toggleMobileMenu}
          onToggleTheme={toggleTheme}
        />
      </div>
      <div className="content-container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
