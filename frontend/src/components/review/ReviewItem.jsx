import ReviewImage from "./ReviewImage";
import ReviewRating from "./ReviewRating";
import ReviewSubject from "./ReviewSubject";
import ReviewText from "./ReviewText";
import ReviewAuthorIcon from "./ReviewAuthorIcon";
import { useSelector } from "react-redux";

function ReviewItem({ reviewData }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <ReviewSubject reviewData={reviewData} />
      <h1 className="mb-4 text-5xl">{reviewData.reviewTitle}</h1>
      <div className="flex justify-between text-gray-300 font-bold mb-2.5">
        <ReviewAuthorIcon user={reviewData.user} />
        {isAuthenticated && <ReviewRating reviewData={reviewData} />}
      </div>
      <ReviewImage reviewData={reviewData} />
      <ReviewText text={reviewData.reviewText} />
    </>
  );
}

export default ReviewItem;
