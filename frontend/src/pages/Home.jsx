import { useSelector } from "react-redux";
import { LoginBlock } from "../features/Auth";
import BestReview from "../components/BestReview/BestReview";

import { useTranslation } from "react-i18next";
import ReviewListViewer from "../features/ReviewListViewer";
import CtaBlock from "../components/CtaBlock/CtaBlock";

function Home() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <BestReview />
      {isAuthenticated && (
        <div className="my-3.5">
          <h3 className="text-2xl font-semibold">{t("cta.createReview")}</h3>
          <CtaBlock />
        </div>
      )}
      {!isAuthenticated && (
        <div className="mb-3.5">
          <LoginBlock />
        </div>
      )}

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
