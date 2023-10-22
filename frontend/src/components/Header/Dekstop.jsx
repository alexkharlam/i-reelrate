import { LogIn, LogOut } from "react-feather";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import TextIconButton from "../ui/buttons/TextIconButton";

import { useLoginLogout } from "../../features/Auth";
import SearchRedirectInput from "../SearchRedirectInput";

function Dekstop() {
    const { t } = useTranslation();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { handleLogin, handleLogout } = useLoginLogout();

    return (
        <header className='hidden justify-between items-center md:flex p-2'>
            {location.pathname !== "/search" && <SearchRedirectInput />}

            {!isAuthenticated && (
                <TextIconButton
                    onClick={handleLogin}
                    Icon={LogIn}
                    text={t("header.authButton")}
                />
            )}
            {isAuthenticated && (
                <TextIconButton
                    onClick={handleLogout}
                    Icon={LogOut}
                    text={t("header.logoutButton")}
                />
            )}
        </header>
    );
}

export default Dekstop;
