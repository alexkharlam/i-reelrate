import { useTranslation } from "react-i18next";
import SocialLoginButtons from "../SocialLoginButtons";

function LoginBlock({ className = "" }) {
  const { t } = useTranslation();

  return (
    <div
      className={`p-3 rounded-lg bg-gradient-to-r from-[#4b6cb7] to-[#182848] flex flex-col items-center text-white ${className}`}
    >
      <h3 className="font-bold text-2xl md:text-4xl mb-3.5">
        {t("login.title")}
      </h3>
      <SocialLoginButtons />
    </div>
  );
}

export default LoginBlock;
