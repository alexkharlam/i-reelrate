import { useSelector } from "react-redux";
import LoginBlock from "../components/ui/LoginBlock";

import ReviewsFullList from "../components/reviewsFullList/ReviewsFullList";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {!isAuthenticated && <LoginBlock />}

      <ReviewsFullList title={t("allReviews")} />
    </div>
  );
}

export default Home;
