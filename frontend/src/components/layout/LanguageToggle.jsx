import { useTranslation } from "react-i18next";

const languages = { ru: "ru", en: "en" };

function LanguageToggle() {
  const { ru, en } = languages;
  /* eslint-disable */
  const { t, i18n } = useTranslation(); /* eslint-enable */
  const currentLanguage = i18n.resolvedLanguage;

  function handleLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="flex">
      <button
        className={`p-1 hover:text-primary hover:scale-105 text-gray-300 ${
          currentLanguage === ru && "text-white font-bold"
        }`}
        onClick={() => handleLanguage(ru)}
      >
        RU
      </button>
      <span className="p-1"> | </span>
      <button
        className={`p-1 hover:text-primary text-gray-300 hover:scale-105 ${
          currentLanguage === en && "text-white font-bold"
        }`}
        onClick={() => handleLanguage(en)}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;
