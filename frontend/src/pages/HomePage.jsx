import { useSelector } from "react-redux";
import LoginBlock from "../components/login/LoginBlock";

import AllReviews from "../components/reviewLists/AllReviews";
import { useTranslation } from "react-i18next";
import CtaLink from "../components/cta/CtaLink";
import PopularReviews from "../components/reviewLists/PopularReviews";

function HomePage() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {isAuthenticated && (
        <>
          <h3 className="text-2xl font-semibold">{t("cta.createReview")}</h3>
          <CtaLink to="/reviews/create" text={t("navigation.createReview")} />
        </>
      )}
      {!isAuthenticated && <LoginBlock />}

      <PopularReviews />
      <AllReviews title={t("reviews.allReviews")} />
    </div>
  );
}

export default HomePage;
