import useReviews from "../../hooks/useReviews";
import ReviewList from "../ui/reviewList/ReviewList";
import CategoriesCloud from "../ui/CategoriesCloud";
import SortDropdown from "../ui/SortDropdown";
import LoadingSpinner from "../ui/LoadingSpinner";

function ReviewsFullList({ title, user = false }) {
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

export default ReviewsFullList;
