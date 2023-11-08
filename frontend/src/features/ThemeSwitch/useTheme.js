import { useState } from "react";

export default function useTheme() {
  const initialTheme = localStorage.getItem("theme");
  const [isLightTheme, setIsLightTheme] = useState(Boolean(initialTheme));
  const html = document.querySelector("html");

  function initTheme() {
    if (isLightTheme) html.classList.remove("dark");
    if (!isLightTheme) html.classList.add("dark");
  }

  const toggleTheme = () => {
    if (isLightTheme) {
      html.classList.add("dark");
      localStorage.setItem("theme", "");
      setIsLightTheme(false);
    }

    if (!isLightTheme) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "1");
      setIsLightTheme(true);
    }
  };

  return { isLightTheme, initTheme, toggleTheme };
}
