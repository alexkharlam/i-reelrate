import { useTranslation } from "react-i18next";
import validCategories from "../../../../../config/categories";
import { memo } from "react";

const CategoryInput = memo(function CategoryInput({ category, setCategory }) {
    const { t } = useTranslation();

    return (
        <div>
            <h5 className='mb-2'>{t("editReview.category")}</h5>
            <select
                className='bg-transparent py-1 px-2 border-2 border-gray-600 text-base rounded-sm'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                {validCategories.map((cat) => (
                    <option key={cat} value={cat}>
                        {t(`categories.${cat}`)}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default CategoryInput;
