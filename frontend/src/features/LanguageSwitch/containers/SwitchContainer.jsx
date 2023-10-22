import { useTranslation } from "react-i18next";
import SwitchButton from "../components/SwitchButton";

const languages = ["ru", "en"];

function SwitchContainer() {
    const [ru, en] = languages;
    const i18n = useTranslation().i18n;
    const currentLanguage = i18n.resolvedLanguage;

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    return (
        <div className='flex'>
            <SwitchButton
                onClick={changeLanguage}
                language={ru}
                currentLanguage={currentLanguage}
            />
            <span className='p-1'> | </span>
            <SwitchButton
                onClick={changeLanguage}
                language={en}
                currentLanguage={currentLanguage}
            />
        </div>
    );
}

export default SwitchContainer;
