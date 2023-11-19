import { useSelector } from "react-redux";
import { LoginBlock } from "../features/Auth";
import BestReviewCard from "../components/BestReviewCard";
import { useTranslation } from "react-i18next";
import ReviewListViewer from "../features/ReviewListViewer";
import MainLinksBlock from "../components/MainLinksBlock";

function Home() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <BestReviewCard />
      {isAuthenticated && <MainLinksBlock className="my-3.5" />}
      {!isAuthenticated && <LoginBlock className="my-3.5" />}

      <h3>{t("reviews.popular")}</h3>
      <ReviewListViewer
        initialQuery={{ limit: 3, sortBy: "-rating.numRates" }}
      />
      <h3 className="mb-3 mt-4">{t("reviews.allReviews")}</h3>
      <ReviewListViewer
        enableCategoryFilter={true}
        enableSorting={true}
        enablePagination={true}
      />
    </div>
  );
}

export default Home;
