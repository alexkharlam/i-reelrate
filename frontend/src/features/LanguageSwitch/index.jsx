import { useTranslation } from "react-i18next";
import SwitchButton from "./SwitchButton";

const languages = ["ru", "en"];

function LanguageSwitch() {
  const [ru, en] = languages;
  const { i18n } = useTranslation();
  const { resolvedLanguage: currentLanguage, changeLanguage } = i18n;

  return (
    <div className="flex">
      <SwitchButton
        onChangeLanguage={changeLanguage}
        language={ru}
        currentLanguage={currentLanguage}
      />
      <span className="p-1"> | </span>
      <SwitchButton
        onChangeLanguage={changeLanguage}
        language={en}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default LanguageSwitch;
