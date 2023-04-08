import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

import { useSiteContext } from "../hooks";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { generateId } from "../utils";

const links = [
  { href: "#home", title: "Home" },
  { href: "#services", title: "Services" },
  { href: "#projects", title: "Projects" },
  { href: "#stack", title: "Stack" },
  { href: "#contact", title: "Contact" },
];

const NavbarLink = ({ children, href, isActive }) => {
  const linkClasses = classNames("navbar-link", {
    "active": isActive,
  });

  return (
    <Link to={href} className={linkClasses}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { toggleTheme, isDarkThemeActive } = useSiteContext();
  const [isVisible, setIsVisble] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarVisibility, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleNavbarVisibility);
  }, []);

  const handleNavbarVisibility = () => {
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

  const isLinkActive = (href) => {
    const urlArray = String(window.location.href).split("#");
    const fragment = urlArray[urlArray.length - 1]; // the last fragment in the URL is the target
    const linkFragment = href.replace("#", ""); // the fragment in the "href" prop

    return fragment === linkFragment;
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
            {links.map(({ href, title }) => (
              <NavbarLink
                key={generateId()}
                href={href}
                isActive={isLinkActive(href)}
              >
                {title}
              </NavbarLink>
            ))}
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
