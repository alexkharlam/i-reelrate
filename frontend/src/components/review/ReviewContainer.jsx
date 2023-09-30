import ReviewImage from "./ReviewImage";
import ReviewRating from "./ReviewRating";
import ReviewSubject from "./ReviewSubject";
import ReviewText from "./ReviewText";
import ReviewAuthor from "./ReviewAuthor";
import { useSelector } from "react-redux";
import ReviewVerdict from "./ReviewVerdict";
import ReviewComments from "./ReviewComments";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";

function ReviewContainer({ id }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [review, setReview] = useState(null);
  const { makeRequest, isLoading } = useHttp();

  useEffect(() => {
    makeRequest(`/api/reviews/${id}`, (data) => setReview(data?.review));
  }, [makeRequest, id]);

  if (isLoading) return <p>loading...</p>;

  if (review)
    return (
      <>
        <ReviewSubject reviewData={review} />
        <h1 className="mb-4 text-5xl">{review.title}</h1>
        <div className="flex md:flex-row flex-col md:gap-0 gap-1.5 justify-between text-secondary font-bold mb-2.5">
          <ReviewAuthor user={review.user} />
          {isAuthenticated && <ReviewRating reviewData={review} />}
        </div>
        <ReviewImage reviewData={review} />
        <ReviewText text={review.text} />
        <ReviewVerdict review={review} />
        <ReviewComments reviewId={review._id} />
      </>
    );
}

export default ReviewContainer;
