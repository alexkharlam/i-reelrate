import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function ThemeMenu() {
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

  return (
    <button
      className="hover:text-primary hover:scale-105"
      onClick={() => setIsDarkTheme((theme) => !theme)}
    >
      {isDarkTheme && <Sun color="white" />}
      {!isDarkTheme && <Moon color="white" />}
    </button>
  );
}

export default ThemeMenu;
