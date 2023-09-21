import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogIn } from "react-feather";

function LoginButton() {
  const { t } = useTranslation();

  return (
    <Link
      to="/login"
      className="gap-1 hidden border-[3px] transition-all duration-100 border-primary-600 hover:bg-primary-600 hover:text-white md:flex text-md font-bold px-2 py-1 rounded-sm items-center "
    >
      <LogIn />
      <span>{t("header.authButton")}</span>
    </Link>
  );
}

export default LoginButton;
