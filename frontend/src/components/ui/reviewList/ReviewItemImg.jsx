import ReviewRating from "./ReviewRating";

function ReviewItemImg({ review }) {
  const { coverImageUrl, rating } = review;

  return (
    <div className="hover:cursor-pointer h-full relative inline-block">
      <img className="w-7 h-6 object-cover object-center" src={coverImageUrl} />
      <ReviewRating rating={rating} />
    </div>
  );
}

export default ReviewItemImg;
