import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import { useMediaQuery } from "react-responsive";

function ThemeMenu() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialTheme = localStorage.getItem("theme") ? true : false;
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme);

  const toggleDarkTheme = (theme) => {
    const htmlDOM = document.querySelector("html");
    if (!theme) {
      htmlDOM.classList.add("dark");
      localStorage.setItem("theme", "");
    } else {
      htmlDOM.classList.remove("dark");
      localStorage.setItem("theme", "1");
    }
  };

  useEffect(() => {
    toggleDarkTheme(isDarkTheme);
  }, [isDarkTheme]);

  const iconSize = isMobile ? 28 : 24;

  return (
    <button
      className="hover:text-primary hover:scale-105 text-1xl"
      onClick={() => setIsDarkTheme((theme) => !theme)}
    >
      {isDarkTheme && <Sun size={iconSize} color="white" />}
      {!isDarkTheme && <Moon size={iconSize} color="white" />}
    </button>
  );
}

export default ThemeMenu;
