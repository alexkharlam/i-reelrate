import { LogIn, LogOut } from "react-feather";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Button from "../components/ui/Button";

import { useLoginLogout } from "../features/Auth";
import SearchRedirectInput from "../components/SearchRedirectInput";

function DekstopHeader() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { handleLogin, handleLogout } = useLoginLogout();

  return (
    <header className="hidden justify-between items-center md:flex p-2">
      {location.pathname !== "/search" && <SearchRedirectInput />}

      {!isAuthenticated && (
        <Button onClick={handleLogin} StartIcon={LogIn}>
          {t("header.authButton")}
        </Button>
      )}
      {isAuthenticated && (
        <Button onClick={handleLogout} StartIcon={LogOut}>
          {t("header.logoutButton")}
        </Button>
      )}
    </header>
  );
}

export default DekstopHeader;
