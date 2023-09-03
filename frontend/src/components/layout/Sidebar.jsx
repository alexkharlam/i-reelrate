import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

function Sidebar() {
  return (
    <aside className="hidden text-gray-100 h-screen shrink-0 flex-col bg-black p-2.5 md:flex gap-3">
      <Link to="/">
        <img className="w-[150px]" src="/logo/rrlogo.svg" alt="ReelRate logo" />
      </Link>
      <Navigation />
      <div className="mt-auto flex justify-between items-center">
        <ThemeToggle />
        <LanguageMenu />
      </div>
    </aside>
  );
}

export default Sidebar;
