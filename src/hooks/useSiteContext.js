import { useContext } from "react";

import { SiteContext } from "../context";

export default function useSiteContext() {
  const {
    theme,
    toggleTheme,
    isDarkThemeActive,
    showMobileMenu,
    toggleMobileMenu,
  } = useContext(SiteContext);

  return {
    theme,
    toggleTheme,
    isDarkThemeActive,
    showMobileMenu,
    toggleMobileMenu,
  };
}
