import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import useTheme from "./useTheme";
import { Sun, Moon } from "react-feather";

function ThemeSwitch() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { isLightTheme, initTheme, toggleTheme } = useTheme();

  useEffect(() => initTheme(), []);

  const iconSize = isMobile ? 28 : 24;

  return (
    <button
      className="hover:text-primary hover:scale-105 text-1xl"
      onClick={() => toggleTheme()}
    >
      {!isLightTheme && <Sun size={iconSize} color="white" />}
      {isLightTheme && <Moon size={iconSize} color="white" />}
    </button>
  );
}

export default ThemeSwitch;
