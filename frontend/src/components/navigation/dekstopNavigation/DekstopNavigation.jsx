import NavLink from "./NavLink";
import { Home, Search } from "react-feather";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import UserNavigation from "./UserNavigation";

function DekstopNavigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { t } = useTranslation();

  return (
    <nav className="flex flex-col gap-3 text-gray-300">
      <NavLink to="/" Icon={Home}>
        {t("navigation.home")}
      </NavLink>
      <NavLink to="/search" Icon={Search}>
        {t("navigation.search")}
      </NavLink>

      <div className="h-[0.5px] bg-gray-600" />
      {isAuthenticated && <UserNavigation />}
    </nav>
  );
}

export default DekstopNavigation;
