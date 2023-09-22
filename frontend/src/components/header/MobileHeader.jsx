import LanguageMenu from "../languageMenu/LanguageMenu";
import ThemeMenu from "../themeMenu/ThemeMenu";

function MobileHeader() {
  return (
    <header className="items-center text-white p-2 flex justify-between bg-gray-1000 dark:bg-gray-700">
      <img className="w-6" src="/logo/rrlogo.svg" />
      <div className="flex gap-3 items-center">
        <LanguageMenu />
        <p>|</p>
        <ThemeMenu />
      </div>
    </header>
  );
}

export default MobileHeader;
