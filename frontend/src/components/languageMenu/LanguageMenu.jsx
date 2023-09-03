import { useTranslation } from "react-i18next";
import LanguageBtn from "./LanguageBtn";

const languages = ["ru", "en"];

function LanguageMenu() {
  const [ru, en] = languages;
  const i18n = useTranslation().i18n;
  const currentLanguage = i18n.resolvedLanguage;

  function handleLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="flex">
      <LanguageBtn
        onLanguage={handleLanguage}
        lng={ru}
        currentLanguage={currentLanguage}
      />
      <span className="p-1"> | </span>
      <LanguageBtn
        onLanguage={handleLanguage}
        lng={en}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default LanguageMenu;
