import { Link } from "react-router-dom";
import ReviewItemImg from "./ReviewItemImg";
import ReviewDescription from "./ReviewDescription";

function ReviewItem({ review }) {
  return (
    <li className="group">
      <Link
        to={`/reviews/${review._id}`}
        className="relative w-full lg:flex h-6 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <ReviewItemImg review={review} />
        <ReviewDescription review={review} />
      </Link>
    </li>
  );
}

export default ReviewItem;
