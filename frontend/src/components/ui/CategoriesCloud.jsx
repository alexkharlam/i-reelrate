import { useTranslation } from "react-i18next";

const categories = [
  "all",
  "movies",
  "music",
  "tv",
  "games",
  "books",
  "science",
  "tech",
];

function CategoriesCloud({ currentCategory, setCategory }) {
  const { t } = useTranslation();

  function handleChange(id) {
    setCategory(id);
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {categories.map((category) => (
        <button
          type="button"
          className={`px-2.5 py-1 rounded-sm text-lg font-semibold border-gray-600 border-2  ${
            category === currentCategory
              ? "bg-black text-white hover:bg-black dark:hover:bg-white"
              : "dark:hover:bg-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => handleChange(category)}
          key={category}
        >
          {t(`categories.${category}`)}
        </button>
      ))}
    </div>
  );
}

export default CategoriesCloud;
