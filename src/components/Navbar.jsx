import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

import { useSiteContext } from "../hooks";
import ThemeSwitchButton from "./ThemeSwitchButton";

const NavbarLink = ({ children, to }) => {
  const urlArray = String(window.location.href).split("#");
  const fragment = urlArray[urlArray.length - 1]; // the last fragment in the URL is the target
  const linkFragment = to.replace("#", ""); // the fragment in the "to" prop

  const linkClasses = classNames("navbar-link", {
    "active": fragment === linkFragment,
  });

  return (
    <Link to={to} className={linkClasses}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { toggleTheme, isDarkThemeActive } = useSiteContext();
  const [isVisible, setIsVisble] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsVisble(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsVisble(true);
    } else {
      // horizonal scroll
    }
    lastScrollTop.current = pageYOffset;
  };

  const linksClassName = classNames("links", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  const navbarClassName = classNames("site-navbar", { "visible": isVisible });

  return (
    <nav className={navbarClassName}>
      <div className="container">
        <div className="block logo-block">
          <Link to="#home">
            <StaticImage
              src="../images/as-logo-color.png"
              alt="alam-sierra-logo"
              width={70}
              height={70}
              layout="fixed"
              placeholder="dominantColor"
            />
          </Link>
        </div>
        <div className="block links-block">
          <div className={linksClassName}>
            <NavbarLink to="#home">Home</NavbarLink>
            <NavbarLink to="#services">Services</NavbarLink>
            <NavbarLink to="#projects">Projects</NavbarLink>
            <NavbarLink to="#stack">Stack</NavbarLink>
            <NavbarLink to="#contact">Contact</NavbarLink>
          </div>
        </div>
        <div className="block actions-block">
          <div className="actions">
            <ThemeSwitchButton
              onClick={toggleTheme}
              darkThemeIsActive={isDarkThemeActive}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
