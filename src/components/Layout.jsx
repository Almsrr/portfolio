import React from "react";
import classNames from "classnames";

import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import { useSiteContext } from "../hooks";

export default function Layout({ children }) {
  const { isDarkTheme, toggleTheme, showMobileMenu, toggleMobileMenu } =
    useSiteContext();

  const layoutClasses = classNames("site-layout dark-theme", {
    "menu-open": showMobileMenu,
    "light-theme": !isDarkTheme,
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
