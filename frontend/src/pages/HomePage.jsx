import { useSelector } from "react-redux";
import LoginBlock from "../components/login/LoginBlock";

import AllReviews from "../components/reviewLists/AllReviews";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomePage() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {isAuthenticated && (
        <>
          <h3 className="text-2xl font-semibold">{t("cta.createReview")}</h3>
          <Link
            className="block hover:scale-[101%] mb-4 p-4 rounded-lg transition-all duration-300 hover:bg-primary-700 text-center text-1xl font-semibold bg-primary-600 text-white"
            to="/reviews/create"
          >
            {t("navigation.createReview")}
          </Link>
        </>
      )}
      {!isAuthenticated && <LoginBlock />}

      <AllReviews title={t("reviews.allReviews")} />
    </div>
  );
}

export default HomePage;
