import RatingIcon from "../RatingIcon";

function ReviewRating({ rating }) {
  return (
    <div className="absolute p-1.5 bottom-[0px] right-[0px] bg-black bg-opacity-70 rounded-tl-sm">
      {rating.value > 0 && <RatingIcon rating={rating} />}
      {rating.value === 0 && <p className="font-semibold">new</p>}
    </div>
  );
}

export default ReviewRating;
