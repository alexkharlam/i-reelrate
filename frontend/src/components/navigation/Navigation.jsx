import NavLink from "./NavLink";
import { Home } from "react-feather";
import { TrendingUp } from "react-feather";
import { User } from "react-feather";
import { Plus } from "react-feather";
import { useTranslation } from "react-i18next";

function Navigation() {
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
      <NavLink cta={true} to="/reviews/create" Icon={Plus}>
        {t("navigation.createReview")}
      </NavLink>
      <NavLink to="/profile/reviews" Icon={User}>
        {t("navigation.myReviews")}
      </NavLink>
    </nav>
  );
}

export default Navigation;
