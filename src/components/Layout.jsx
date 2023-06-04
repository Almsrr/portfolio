import React from "react";
import classNames from "classnames";

import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import { useMobileMenu, useTheme } from "../hooks";

export default function Layout({ children }) {
  const { showMobileMenu, toggleMobileMenu } = useMobileMenu();
  const { isDarkTheme, toggleTheme } = useTheme();

  const layoutClasses = classNames("site-layout", {
    "menu-open": showMobileMenu,
    "light-theme": !isDarkTheme,
    "dark-theme": isDarkTheme,
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
          isDarkActive={isDarkTheme}
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
