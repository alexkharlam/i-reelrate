import ReviewRating from "./ReviewRating";

function ReviewItemImg({ review }) {
  const { coverImageUrl, rating } = review;

  return (
    <div className="hover:cursor-pointer relative">
      <img
        className="w-7 h-full object-cover object-center"
        src={coverImageUrl}
      />
      <ReviewRating rating={rating} />
    </div>
  );
}

export default ReviewItemImg;
