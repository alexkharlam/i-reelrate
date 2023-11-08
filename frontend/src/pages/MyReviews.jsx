import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import ViewReviewList from "../features/ReviewListViewer";
import UserPanel from "../features/UserPanel";

function MyReviews() {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <h3>{t("userPanel.title")}</h3>
      <UserPanel />

      <h3 className="text-1xl mb-2">{t("reviews.myReviews")}</h3>
      <ViewReviewList
        enableCategoryFilter={true}
        enableSorting={true}
        query={{ user: user._id }}
      />
    </>
  );
}

export default MyReviews;
