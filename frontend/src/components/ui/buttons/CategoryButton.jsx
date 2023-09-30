import { useTranslation } from "react-i18next";

function CategoryButton({ active, name, onClick }) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={`px-2.5 hover:scale-[102%] transition-all duration-100 py-1 rounded-sm text-lg font-semibold border-gray-600 border-2  ${
        active
          ? "bg-black hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white"
          : "dark:hover:bg-gray-600 hover:bg-gray-200"
      }`}
      onClick={() => onClick(name)}
      key={name}
    >
      {t(`categories.${name}`)}
    </button>
  );
}

export default CategoryButton;
