import React, { useState } from "react";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function SiteContextProvider({ children }) {
  const [theme, setTheme] = useState("DARK");

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "DARK" ? "LIGHT" : "DARK";
      return newTheme;
    });
  };

  return (
    <SiteContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SiteContext.Provider>
  );
}
