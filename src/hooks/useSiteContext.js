import { useContext } from "react";

import { SiteContext } from "../context";

export default function useSiteContext() {
  const { theme, toggleTheme } = useContext(SiteContext);

  return [theme, toggleTheme];
}
