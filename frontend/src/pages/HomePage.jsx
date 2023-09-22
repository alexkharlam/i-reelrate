import { useSelector } from "react-redux";
import LoginBlock from "../components/login/LoginBlock";

import AllReviews from "../components/reviewLists/AllReviews";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {!isAuthenticated && <LoginBlock />}

      <AllReviews title={t("allReviews")} />
    </div>
  );
}

export default HomePage;
