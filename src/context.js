import React, { useState, useEffect } from "react";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  isDarkThemeActive: true,
});

const storagedTheme = localStorage ? localStorage.getItem("theme") : "";

export default function SiteContextProvider({ children }) {
  const [theme, setTheme] = useState(storagedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "DARK" ? "LIGHT" : "DARK";
      return newTheme;
    });
  };

  const isDarkThemeActive = theme === "DARK";

  return (
    <SiteContext.Provider value={{ theme, toggleTheme, isDarkThemeActive }}>
      {children}
    </SiteContext.Provider>
  );
}
