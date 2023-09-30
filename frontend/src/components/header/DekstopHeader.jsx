import { LogIn } from "react-feather";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import HeaderSearch from "./headerSearch/HeaderSearch";
import Button from "../ui/buttons/Button";

import useLoginLogout from "../../hooks/useLoginLogout";

function DekstopHeader() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { handleLogin, handleLogout } = useLoginLogout();
  return (
    <header className="hidden justify-between items-center md:flex p-2">
      <HeaderSearch />

      {!isAuthenticated && (
        <Button
          onClick={handleLogin}
          Icon={LogIn}
          text={t("header.authButton")}
        />
      )}
      {isAuthenticated && (
        <Button
          onClick={handleLogout}
          Icon={LogIn}
          text={t("header.logoutButton")}
        />
      )}
    </header>
  );
}

export default DekstopHeader;
