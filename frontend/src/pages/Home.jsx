import { useSelector } from "react-redux";
import LoginBlock from "../components/ui/LoginBlock";

import ReviewsFullList from "../components/reviewsFullList/ReviewsFullList";

function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {!isAuthenticated && <LoginBlock />}

      <ReviewsFullList title="All reviews" />
    </div>
  );
}

export default Home;
