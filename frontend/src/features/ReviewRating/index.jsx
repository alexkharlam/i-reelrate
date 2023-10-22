import RatingContainer from "./containers/RatingContainer";
import UserScoreContainer from "./containers/UserScoreContainer";
import { RatingProvider } from "./context/RatingContext";
import { UserScoreProvider } from "./context/UserScoreContext";

function ReviewRating({ id }) {
    return (
        <UserScoreProvider reviewId={id}>
            <RatingProvider reviewId={id}>
                <div>
                    <RatingContainer />
                    <UserScoreContainer />
                </div>
            </RatingProvider>
        </UserScoreProvider>
    );
}

export default ReviewRating;
