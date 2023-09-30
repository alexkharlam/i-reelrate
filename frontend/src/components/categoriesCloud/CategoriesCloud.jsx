import CategoryButton from "../ui/buttons/CategoryButton";

const CATEGORIES = [
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
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category}
          name={category}
          active={category === currentCategory}
          onClick={(id) => setCategory(id)}
        />
      ))}
    </div>
  );
}

export default CategoriesCloud;
