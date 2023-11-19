import { Link } from "react-router-dom";
import DekstopNavigation from "../components/DekstopNavigation";

import LanguageSwitch from "../features/LanguageSwitch";
import ThemeSwitch from "../features/ThemeSwitch";
import FlexSpacer from "../components/ui/FlexSpacer";

function Sidebar() {
  return (
    <aside className="hidden text-gray-100 h-screen shrink-0 flex-col bg-gray-200 dark:bg-black p-2.5 md:flex gap-3">
      <Link to="/">
        <img className="w-[150px]" src="/logo/rrlogo.svg" alt="ReelRate logo" />
      </Link>
      <DekstopNavigation />
      <FlexSpacer className="mt-auto">
        <ThemeSwitch />
        <LanguageSwitch />
      </FlexSpacer>
    </aside>
  );
}

export default Sidebar;
