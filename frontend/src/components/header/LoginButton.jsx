import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogIn } from "react-feather";

function LoginButton() {
  const { t } = useTranslation();

  return (
    <Link
      to="/login"
      className="flex gap-1 text-white text-md font-bold px-2 py-1 rounded-sm items-center bg-gradient-to-r from-[#FFD43B] to-[#9A6352]"
    >
      <LogIn />
      <span>{t("header.authButton")}</span>
    </Link>
  );
}

export default LoginButton;
