import { useContext } from "react";
import { ReviewsContext } from "../../context/reviewsContext";
import CategoryItem from "./CategoryItem";

function CategoriesList({ categories }) {
    const { filter, updateFilter } = useContext(ReviewsContext);

    function handleClick(e) {
        updateFilter({ category: e.target.value });
    }

    return (
        <div className='flex flex-wrap gap-2 mb-3'>
            {["all", ...categories].map((category) => (
                <CategoryItem
                    key={category}
                    onClick={handleClick}
                    currentCategory={filter.category}
                    category={category}
                />
            ))}
        </div>
    );
}

export default CategoriesList;
