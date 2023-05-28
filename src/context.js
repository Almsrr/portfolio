import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  isDarkThemeActive: false,
  showMobileMenu: false,
  toggleMobileMenu: () => {},
});

const callback = (theme) =>
  document.body.classList.add(`body-${theme.toLocaleLowerCase()}`);

export default function SiteContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "DARK", callback);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);

  useEffect(() => {
    setIsDarkThemeActive(theme === "DARK");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "DARK" ? "LIGHT" : "DARK";

      document.body.classList.replace(
        `body-${prevTheme.toLocaleLowerCase()}`,
        `body-${newTheme.toLocaleLowerCase()}`
      );
      return newTheme;
    });
  };

  const toggleMobileMenu = () => setShowMobileMenu((state) => !state);

  return (
    <SiteContext.Provider
      value={{
        theme,
        toggleTheme,
        isDarkThemeActive,
        showMobileMenu,
        toggleMobileMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
