import { useEffect, useState } from "react";
import LoadingSpinner from "../ui/spinners/LoadingSpinner";
import ReviewList from "./ReviewList";
import useHttp from "../../hooks/useHttp";

function PopularReviews() {
  const [reviews, setReviews] = useState([]);
  const { makeRequest, isLoading } = useHttp();

  useEffect(() => {
    makeRequest(`/api/reviews?sort=-rating.numRates&limit=3`, (data) =>
      setReviews(data?.reviews),
    );
  }, [makeRequest]);

  return (
    <div className="mb-3.5">
      <h3 className="text-2xl font-semibold">Popular reviews</h3>
      {isLoading && <LoadingSpinner />}
      {!isLoading && reviews.length > 0 && <ReviewList reviews={reviews} />}
    </div>
  );
}

export default PopularReviews;
