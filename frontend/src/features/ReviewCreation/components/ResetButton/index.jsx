import { useTranslation } from "react-i18next";
import { RotateCcw } from "react-feather";

function ResetButton({ onReset }) {
    const { t } = useTranslation();

    return (
        <button
            className='py-1 px-2 gap-1.5 max-w-xs hover:text-black dark:hover:text-white justify-center items-center flex text-base bg-transparent border-gray-600 border-2 text-secondary md:w-auto rounded-sm'
            type='button'
            onClick={onReset}
        >
            {t("editReview.reset")}
            <RotateCcw />
        </button>
    );
}

export default ResetButton;
