import { useSelector } from "react-redux";
import ReviewsFullList from "../components/reviewsFullList/ReviewsFullList";

function MyReviews() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <ReviewsFullList title={`${auth.user.name} - my reviews`} user={true} />
    </>
  );
}

export default MyReviews;
