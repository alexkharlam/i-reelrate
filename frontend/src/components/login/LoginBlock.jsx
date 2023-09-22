import { useTranslation } from "react-i18next";
import SocialLoginsButtons from "./SocialLoginsButtons";

function LoginBlock({ xl = false }) {
  const { t } = useTranslation();

  return (
    <div className="p-3 rounded-lg bg-gradient-to-r from-[#4b6cb7] to-[#182848] flex flex-col items-center text-white">
      <h3 className="font-bold text-2xl md:text-4xl mb-3.5">
        {t("login.title")}
      </h3>
      <SocialLoginsButtons />
      {xl && (
        <>
          <p className="text-2xl mt-3.5 mb-2.5">{t("login.features.title")}</p>
          <ul className="text-1xl flex flex-col gap-2 list-disc ml-3">
            <li>{t("login.features.1")}</li>
            <li>{t("login.features.2")}</li>
            <li>{t("login.features.3")}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default LoginBlock;
