import TextIconLink from "../ui/TextIconLink";
import { Home, Search } from "react-feather";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import UserSpecificLinks from "./UserSpecificLinks";
import AdminSpecificLinks from "./AdminSpecificLinks";

function DekstopNavigation() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  const { t } = useTranslation();

  return (
    <nav className="flex flex-col gap-3 text-gray-300">
      <TextIconLink to="/" StartIcon={Home}>
        {t("navigation.home")}
      </TextIconLink>
      <TextIconLink to="/search" StartIcon={Search}>
        {t("navigation.search")}
      </TextIconLink>

      <div className="h-[0.5px] bg-gray-600" />
      {isAuthenticated && <UserSpecificLinks />}
      {isAdmin && <AdminSpecificLinks />}
    </nav>
  );
}

export default DekstopNavigation;
