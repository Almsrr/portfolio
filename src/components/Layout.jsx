import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";

import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import { useSiteContext } from "../hooks";

export default function Layout({ children }) {
  const { isDarkTheme, toggleTheme, showMobileMenu, toggleMobileMenu } =
    useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          logo {
            filename
            gatsbyImage(width: 60)
          }
        }
      }
    }
  `);
  const logo = data.allContentfulPerson.nodes[0].logo;

  const layoutClasses = classNames("site-layout", {
    "menu-open": showMobileMenu,
    "dark-theme": isDarkTheme,
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
        <Navbar logo={logo} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
