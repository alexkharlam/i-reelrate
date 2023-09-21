import { Star } from "react-feather";

function RatingIcon({ rating }) {
  const { value: ratingValue, numRates } = rating;

  const color =
    ratingValue === 0
      ? "#ffd43b"
      : ratingValue < 2
      ? "#e8590c"
      : ratingValue < 3
      ? "#e67700"
      : ratingValue < 3.5
      ? "#ffd43b"
      : ratingValue < 4
      ? "#a9e34b"
      : ratingValue < 4.5
      ? "#40c057"
      : "#2f9e44";

  const formattedRating =
    ratingValue % 1 === 0 ? ratingValue : ratingValue.toFixed(2);

  return (
    <div className="flex gap-1 items-center  text-md font-bold">
      <p>{formattedRating}</p>
      <Star fill={color} color={color} size={18} />
      <p>({numRates})</p>
    </div>
  );
}

export default RatingIcon;
