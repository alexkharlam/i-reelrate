import LanguageSwitch from "../../features/LanguageSwitch";
import ThemeSwitch from "../../features/ThemeSwitch";

function Mobile() {
    return (
        <header className='items-center text-white p-2 flex justify-between bg-gray-1000 dark:bg-gray-700'>
            <img className='w-6' src='/logo/rrlogo.svg' />
            <div className='flex gap-3 items-center'>
                <LanguageSwitch />
                <p>|</p>
                <ThemeSwitch />
            </div>
        </header>
    );
}

export default Mobile;
