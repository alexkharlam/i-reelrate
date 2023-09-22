import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/ui/spinners/LoadingSpinner";
import Review from "../components/review/Review";
import useReview from "../hooks/useReview";

function ReviewPage() {
  const { id } = useParams();
  const { isLoading, review } = useReview(id);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {review && <Review reviewData={review} />}
    </>
  );
}

export default ReviewPage;
