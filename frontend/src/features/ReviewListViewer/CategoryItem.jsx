import { useTranslation } from "react-i18next";

function CategoryItem({ category, onClick, currentCategory }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={onClick}
            className={`px-2.5 hover:scale-[102%] transition-all duration-100 py-1 rounded-sm dark:hover:bg-gray-600 hover:bg-gray-200 text-lg font-semibold border-gray-600 border-2 ${
                currentCategory === category
                    ? "bg-black hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white"
                    : "dark:hover:bg-gray-600 hover:bg-gray-200"
            }`}
            key={category}
            value={category}
            type='button'
        >
            {t(`categories.${category}`)}
        </button>
    );
}

export default CategoryItem;
