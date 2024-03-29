import React, { useRef, useEffect, useState, useCallback } from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classNames from "classnames";

import { useSiteContext } from "../hooks";
import ThemeSwitchButton from "./ThemeSwitchButton";

const NavbarLink = ({ children, href, isActive, onClick }) => {
  const linkClasses = classNames("navbar-link", {
    "active": isActive,
  });

  return (
    <button
      type="button"
      className={linkClasses}
      onClick={onClick.bind(null, href)}
    >
      {children}
    </button>
  );
};

export default function Navbar(props) {
  const { isDarkTheme, toggleTheme } = useSiteContext();
  const [isVisible, setIsVisble] = useState(true);
  const lastScrollTop = useRef(0);
  const [sectionElements, setSectionElements] = useState([]);
  const [activeLink, setActiveLink] = useState("");

  const handleLinksActivation = useCallback(() => {
    let current = "";

    sectionElements.forEach((s) => {
      // 80 is the height of the navbar
      const sectionTop = s.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = s.getAttribute("id");
      }
    });
    if (!current) {
      return;
    }
    if (current === activeLink) {
      return;
    }

    const link = "#" + current;
    setActiveLink(link);
  }, [sectionElements, activeLink]);

  useEffect(() => {
    setSectionElements(document.querySelectorAll("section"));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarVisibility, {
      passive: true,
    });
    window.addEventListener("scroll", handleLinksActivation, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
      window.removeEventListener("scroll", handleLinksActivation);
    };
  }, [handleLinksActivation]);

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

  const handleBtnClick = (href) => {
    // setActiveLink(href);
    navigate(`/${href}`);
  };

  const isLinkActive = (href) => activeLink === href;

  const linksClassName = classNames("links", {
    "dark": isDarkTheme,
    "light": !isDarkTheme,
  });
  const navbarClassName = classNames("site-navbar", { "visible": isVisible });

  return (
    <nav className={navbarClassName}>
      <div className="container">
        <div className="block logo-block">
          <NavbarLink href="#home" isActive={false} onClick={handleBtnClick}>
            <GatsbyImage
              image={getImage(props.logo)}
              alt={props.logo.filename}
              placeholder="none"
            />
          </NavbarLink>
        </div>
        <div className="block links-block">
          <div className={linksClassName}>
            <NavbarLink
              href="#home"
              isActive={isLinkActive("#home")}
              onClick={handleBtnClick}
            >
              Home
            </NavbarLink>
            <NavbarLink
              href="#services"
              isActive={isLinkActive("#services")}
              onClick={handleBtnClick}
            >
              Services
            </NavbarLink>
            <NavbarLink
              href="#projects"
              isActive={isLinkActive("#projects")}
              onClick={handleBtnClick}
            >
              Projects
            </NavbarLink>
            <NavbarLink
              href="#stack"
              isActive={isLinkActive("#stack")}
              onClick={handleBtnClick}
            >
              Stack
            </NavbarLink>
            <NavbarLink
              href="#contact"
              isActive={isLinkActive("#contact")}
              onClick={handleBtnClick}
            >
              Contact
            </NavbarLink>
          </div>
        </div>
        <div className="block actions-block">
          <div className="actions">
            <ThemeSwitchButton
              onClick={toggleTheme}
              darkThemeIsActive={isDarkTheme}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
