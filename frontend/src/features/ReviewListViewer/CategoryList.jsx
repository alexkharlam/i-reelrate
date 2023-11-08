import CategoryItem from "./CategoryItem";

function CategoryList({ query, updateQuery, categories }) {
  function handleClick(e) {
    updateQuery({ category: e.target.value });
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {["all", ...categories].map((category) => (
        <CategoryItem
          key={category}
          onClick={handleClick}
          currentCategory={query.category}
          category={category}
        />
      ))}
    </div>
  );
}

export default CategoryList;
