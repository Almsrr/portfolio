import React, { useState } from "react";
import classNames from "classnames";

import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import { useSiteContext } from "../hooks";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkThemeActive } = useSiteContext();

  const toggleMenu = () => setShowMenu((state) => !state);

  const layoutClasses = classNames("site-layout", {
    "menu-open": showMenu,
    "light-theme": !isDarkThemeActive,
    "dark-theme": isDarkThemeActive,
  });

  return (
    <div className={layoutClasses}>
      <div className="burger-btn-container">
        <BurgerButton menuIsVisible={showMenu} onClick={toggleMenu} />
      </div>
      <div className="mobile-menu-container">
        <MobileMenu onToggleMenu={toggleMenu} />
      </div>
      <div className="content-container">
        <Navbar menuIsVisible={showMenu} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
