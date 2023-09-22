function LanguageBtn({ lng, currentLanguage, onLanguage }) {
  return (
    <button
      className={`block relative hover:text-primary hover:scale-105 text-gray-300 text-base md:text-lg ${
        currentLanguage === lng && "text-white font-bold underline"
      }`}
      onClick={() => onLanguage(lng)}
    >
      <span>{lng.toUpperCase()}</span>
    </button>
  );
}

export default LanguageBtn;
