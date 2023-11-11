import { Link } from "react-router-dom";
import ReviewInfo from "./ReviewInfo";
import ReviewCover from "./ReviewCover";

function ReviewItem({ review }) {
  const linkUrl = `/reviews/${review._id}`;

  return (
    <li>
      <Link
        to={linkUrl}
        className="relative group w-full lg:flex h-6 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <ReviewCover review={review} />
        <ReviewInfo review={review} />
      </Link>
    </li>
  );
}

export default ReviewItem;
