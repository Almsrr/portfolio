import { useState, useEffect } from "react";
import { useSiteContext } from "./";

export default function useTheme() {
  const { theme, toggleTheme } = useSiteContext();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  return { theme, isDarkTheme, toggleTheme };
}
