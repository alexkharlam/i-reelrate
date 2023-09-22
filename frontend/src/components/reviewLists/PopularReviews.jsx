import usePopularReviews from "../../hooks/usePopularReviews";
import LoadingSpinner from "../ui/spinners/LoadingSpinner";
import ReviewList from "./ReviewList";

function PopularReviews() {
  const { isLoading, reviews } = usePopularReviews();

  return (
    <>
      <h3 className="text-2xl font-semibold">Popular reviews</h3>
      {isLoading && <LoadingSpinner />}
      {!isLoading && reviews.length > 0 && <ReviewList reviews={reviews} />}
    </>
  );
}

export default PopularReviews;
