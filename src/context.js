import React, { useState } from "react";
import { useLocalStorage } from "./hooks";

export const SiteContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
  showMobileMenu: false,
  toggleMobileMenu: () => {},
});

export default function SiteContextProvider({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    { variant: "dark" },
    (theme) => document.body.classList.add(`body-${theme.variant}`)
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = {
        variant: prevTheme.variant === "dark" ? "light" : "dark",
      };

      document.body.classList.replace(
        `body-${prevTheme.variant}`,
        `body-${newTheme.variant}`
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
        showMobileMenu,
        toggleMobileMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
