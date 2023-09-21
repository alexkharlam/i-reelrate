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
              ? "bg-white text-black hover:bg-white"
              : "hover:bg-gray-600"
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
