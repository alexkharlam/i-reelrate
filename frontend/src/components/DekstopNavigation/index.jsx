import TextIconLink from "../ui/links/TextIconLink";
import { Home, Search } from "react-feather";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import UserSpecificLinks from "./UserSpecificLinks";

function DekstopNavigation() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const { t } = useTranslation();

    return (
        <nav className='flex flex-col gap-3 text-gray-300'>
            <TextIconLink to='/' Icon={Home}>
                {t("navigation.home")}
            </TextIconLink>
            <TextIconLink to='/search' Icon={Search}>
                {t("navigation.search")}
            </TextIconLink>

            <div className='h-[0.5px] bg-gray-600' />
            {isAuthenticated && <UserSpecificLinks />}
        </nav>
    );
}

export default DekstopNavigation;
