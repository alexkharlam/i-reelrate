import LikeContainer from "./containers/LikeContainer";
import { LikeContextProvider } from "./context/LikeContext";

function LikeReview({ reviewId }) {
  return (
    <LikeContextProvider reviewId={reviewId}>
      <LikeContainer />
    </LikeContextProvider>
  );
}

export default LikeReview;
