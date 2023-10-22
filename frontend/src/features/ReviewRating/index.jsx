import RatingContainer from "./containers/RatingContainer";
import UserScoreContainer from "./containers/UserScoreContainer";
import { RatingProvider } from "./context/RatingContext";
import { UserScoreProvider } from "./context/UserScoreContext";
import { useSelector } from "react-redux";

function ReviewRating({ id }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <UserScoreProvider reviewId={id}>
      <RatingProvider reviewId={id}>
        <div>
          <RatingContainer />
          {isAuthenticated && <UserScoreContainer />}
        </div>
      </RatingProvider>
    </UserScoreProvider>
  );
}

export default ReviewRating;
