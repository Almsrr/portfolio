import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  showMobileMenu: false,
  toggleMobileMenu: () => {},
});

export default function SiteContextProvider({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useLocalStorage("theme", "dark", (theme) =>
    document.body.classList.add(`body-${theme}`)
  );

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      document.body.classList.replace(`body-${prevTheme}`, `body-${newTheme}`);
      return newTheme;
    });
  };

  const toggleMobileMenu = () => setShowMobileMenu((state) => !state);

  return (
    <SiteContext.Provider
      value={{
        theme,
        toggleTheme,
        isDarkTheme,
        showMobileMenu,
        toggleMobileMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
