import { useSiteContext } from "./";

export default function useMobileMenu() {
  const { showMobileMenu, toggleMobileMenu } = useSiteContext();

  return { showMobileMenu, toggleMobileMenu };
}
