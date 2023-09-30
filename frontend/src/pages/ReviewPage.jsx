import { useParams } from "react-router-dom";
import ReviewContainer from "../components/review/ReviewContainer";

function ReviewPage() {
  const { id } = useParams();

  return <>{<ReviewContainer id={id} />}</>;
}

export default ReviewPage;
