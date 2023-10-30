import { useContext, useEffect } from "react";
import Review from "../components/Review";
import { ReviewContext } from "../context/reviewContext";
import useHttp from "../../../hooks/useHttp";
import LoadingSpinner from "../../../components/ui/spinners/LoadingSpinner";
import CenteredText from "../../../components/ui/messages/CenteredText";

function ReviewContainer({ id }) {
  const { makeRequest, isLoading, error } = useHttp();
  const { updateReviewContext, review } = useContext(ReviewContext);

  useEffect(() => {
    const submitData = (data) => updateReviewContext(data?.review);
    makeRequest({ url: `/api/reviews/${id}`, callback: submitData });
  }, [id, makeRequest, updateReviewContext]);

  if (isLoading) return <LoadingSpinner />;

  if (review) return <Review id={review._id} />;

  if (error)
    return (
      <CenteredText additionalText={error}>
        Oops! For some reason we cannot get review!
      </CenteredText>
    );
}

export default ReviewContainer;
