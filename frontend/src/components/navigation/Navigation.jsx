import NavLink from "./NavLink";
import { Home } from "react-feather";
import { TrendingUp } from "react-feather";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import UserNavigation from "./UserNavigation";

function Navigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { t } = useTranslation();

  return (
    <nav className="flex flex-col gap-3 text-gray-300">
      <NavLink to="/" Icon={Home}>
        {t("navigation.home")}
      </NavLink>
      <NavLink to="/top" Icon={TrendingUp}>
        {t("navigation.topReviews")}
      </NavLink>
      <div className="h-[0.5px] bg-gray-600" />
      {isAuthenticated && <UserNavigation />}
    </nav>
  );
}

export default Navigation;
