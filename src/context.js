import React, { useState, useEffect, useCallback } from "react";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  isDarkThemeActive: false,
  showMobileMenu: false,
  toggleMobileMenu: () => {},
});

export default function SiteContextProvider({ children }) {
  const [theme, setTheme] = useState("DARK");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const storagedTheme = localStorage.getItem("theme");
    if (storagedTheme) {
      setTheme(storagedTheme);
    }
  }, []);

  const updateBodyClasses = useCallback((prevTheme = "DARK", newTheme) => {
    document.body.classList.remove(`body-${prevTheme.toLocaleLowerCase()}`);
    document.body.classList.add(`body-${newTheme.toLocaleLowerCase()}`);
  }, []);

  useEffect(() => {
    updateBodyClasses(undefined, theme);
    localStorage.setItem("theme", theme);
  }, [theme, updateBodyClasses]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "DARK" ? "LIGHT" : "DARK";
      updateBodyClasses(prev, newTheme);

      return newTheme;
    });
  };

  const toggleMobileMenu = () => setShowMobileMenu((state) => !state);

  const isDarkThemeActive = theme === "DARK";

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
