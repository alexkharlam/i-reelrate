import ReviewImage from "./ReviewImage";
import ReviewRating from "./ReviewRating";
import ReviewSubject from "./ReviewSubject";
import ReviewText from "./ReviewText";
import ReviewAuthor from "./ReviewAuthor";
import { useSelector } from "react-redux";
import ReviewVerdict from "./ReviewVerdict";

function Review({ reviewData }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <ReviewSubject reviewData={reviewData} />
      <h1 className="mb-4 text-5xl">{reviewData.reviewTitle}</h1>
      <div className="flex md:flex-row flex-col md:gap-0 gap-1.5 justify-between text-secondary font-bold mb-2.5">
        <ReviewAuthor user={reviewData.user} />
        {isAuthenticated && <ReviewRating reviewData={reviewData} />}
      </div>
      <ReviewImage reviewData={reviewData} />
      <ReviewText text={reviewData.reviewText} />
      <ReviewVerdict review={reviewData} />
    </>
  );
}

export default Review;
