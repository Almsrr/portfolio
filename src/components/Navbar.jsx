import React from "react";
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
  const [theme, toggleTheme] = useSiteContext();
  const darkIsActive = theme === "DARK";

  return (
    <nav className="site-navbar">
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
          <div className="links">
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
              darkThemeIsActive={darkIsActive}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
