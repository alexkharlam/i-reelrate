import { useParams } from "react-router-dom";
import ReviewViewer from "../features/ReviewViewer";

function Review() {
  const { id } = useParams();

  return <ReviewViewer reviewId={id} />;
}

export default Review;
