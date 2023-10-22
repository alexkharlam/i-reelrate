function SwitchButton({ language, currentLanguage, onClick }) {
    return (
        <button
            className={`block relative hover:text-primary hover:scale-105 text-gray-300 text-base md:text-lg ${
                currentLanguage === language && "text-white font-bold underline"
            }`}
            onClick={() => onClick(language)}
        >
            <span>{language.toUpperCase()}</span>
        </button>
    );
}

export default SwitchButton;
