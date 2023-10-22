import { useTranslation } from "react-i18next";

export default function useSwitchLanguage() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }
}
