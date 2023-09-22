import LanguageMenu from "../languageMenu/LanguageMenu";
import ThemeMenu from "../themeMenu/ThemeMenu";

function MobileHeader() {
  return (
    <header className="items-center p-2 text-black flex justify-between bg-gray-1000 dark:bg-transparent">
      <img className="w-6" src="/logo/rrlogo.svg" />
      <LanguageMenu />
      <ThemeMenu />
    </header>
  );
}

export default MobileHeader;
