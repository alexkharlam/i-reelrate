import { memo } from "react";
import { useTranslation } from "react-i18next";

const Verdict = memo(function Verdict({ value, setValue }) {
  const { t } = useTranslation();

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h5>{t("editReview.verdict")}:</h5>
      <div className="w-full flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            type="button"
            onClick={() => setValue(option)}
            className={`hover:bg-gray-500 py-1.5 px-2.5 rounded-full text-1xl border-[1px] border-gray-500 ${
              option === value &&
              "bg-primary-600 text-white hover:bg-primary-600"
            }`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
});

export default Verdict;
