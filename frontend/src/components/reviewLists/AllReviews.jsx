import useReviews from "../../hooks/useReviews";
import CategoriesCloud from "../categoriesCloud/CategoriesCloud";
import ReviewList from "./ReviewList";
import SortDropdown from "../sortDropdown/SortDropdown";
import LoadingSpinner from "../ui/spinners/LoadingSpinner";

function AllReviews({ title, user = false }) {
  const { isLoading, reviews, sortBy, setSortBy, category, setCategory } =
    useReviews({ user });

  return (
    <>
      <h3 className="font-semibold text-2xl mt-3">{title}</h3>
      <CategoriesCloud currentCategory={category} setCategory={setCategory} />
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

      {isLoading && <LoadingSpinner />}
      {!isLoading && <ReviewList reviews={reviews} />}
    </>
  );
}

export default AllReviews;
