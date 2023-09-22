import ReviewRating from "./ReviewRating";

function ReviewItemImg({ review }) {
  const { coverImageUrl, rating } = review;

  return (
    <div className="hover:cursor-pointer w-full md:w-auto h-full relative inline-block">
      <img
        className="md:w-7 w-full h-6 object-cover object-center"
        src={coverImageUrl}
      />
      <ReviewRating rating={rating} />
    </div>
  );
}

export default ReviewItemImg;
