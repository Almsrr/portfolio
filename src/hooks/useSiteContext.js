import { useContext } from "react";

import { SiteContext } from "../context";

export default function useSiteContext() {
  const { theme, toggleTheme, showMobileMenu, toggleMobileMenu } =
    useContext(SiteContext);

  return {
    theme,
    toggleTheme,
    showMobileMenu,
    toggleMobileMenu,
  };
}
