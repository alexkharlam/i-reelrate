import { useTranslation } from "react-i18next";
import { Save } from "react-feather";

function SubmitButton() {
    const { t } = useTranslation();

    return (
        <button
            className='py-2 px-3 gap-1.5 w-full max-w-md justify-center my-3 items-center flex text-base bg-primary-600 hover:bg-primary-700 text-white font-bold md:w-auto rounded-sm'
            type='submit'
        >
            {t("editReview.submit")}
            <Save />
        </button>
    );
}

export default SubmitButton;
