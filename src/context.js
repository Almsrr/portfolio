import React, { useState, useEffect } from "react";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  isDarkThemeActive: true,
});

export default function SiteContextProvider({ children }) {
  const [theme, setTheme] = useState("DARK");

  useEffect(() => {
    const storagedTheme = localStorage.getItem("theme");
    const theme = storagedTheme || "DARK";

    setTheme(theme);
    localStorage.setItem("theme", theme);
  }, []);

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
