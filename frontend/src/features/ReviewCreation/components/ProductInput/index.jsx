import { memo } from "react";
import { useTranslation } from "react-i18next";

const ProductInput = memo(function ProductInput({ value, setValue }) {
    const { t } = useTranslation();

    return (
        <div>
            <h5>{t("editReview.product")}</h5>
            <div className='relative'>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='block rounded-sm border-gray-600 border-2 w-full text-1xl p-2 font-[Montserrat] bg-[rgba(0,0,0,0)]'
                    type='text'
                    placeholder='Product...'
                />
            </div>
        </div>
    );
});

export default ProductInput;
