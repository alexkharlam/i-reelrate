import { useSelector } from "react-redux";
import HeaderSearch from "./headerSearch/HeaderSearch";
import useLoginLogout from "../../hooks/useLoginLogout";
import HeaderButton from "./HeaderButton";
import { useTranslation } from "react-i18next";
import { LogIn } from "react-feather";

function Header() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { handleLogin, handleLogout } = useLoginLogout();
  // {t("header.logoutButton")}
  // {t("header.authButton")}

  return (
    <header className="hidden justify-between items-center md:flex p-2">
      <HeaderSearch />

      {!isAuthenticated && (
        <HeaderButton
          onClick={handleLogin}
          Icon={LogIn}
          text={t("header.authButton")}
        />
      )}
      {isAuthenticated && (
        <HeaderButton
          onClick={handleLogout}
          Icon={LogIn}
          text={t("header.logoutButton")}
        />
      )}
    </header>
  );
}

export default Header;
