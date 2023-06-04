import { useContext, useState, useEffect } from "react";

import { SiteContext } from "../context";

export default function useSiteContext() {
  const { theme, toggleTheme, showMobileMenu, toggleMobileMenu } =
    useContext(SiteContext);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => setIsDarkTheme(theme.variant === "dark"), [theme]);

  return {
    theme,
    toggleTheme,
    isDarkTheme,
    showMobileMenu,
    toggleMobileMenu,
  };
}
