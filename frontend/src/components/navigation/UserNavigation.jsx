import { Plus } from "react-feather";
import { User } from "react-feather";

import NavLink from "./NavLink";
import { useTranslation } from "react-i18next";

function UserNavigation() {
  const { t } = useTranslation();

  return (
    <>
      <NavLink cta={true} to="/reviews/create" Icon={Plus}>
        {t("navigation.createReview")}
      </NavLink>
      <NavLink to="/profile/reviews" Icon={User}>
        {t("navigation.myReviews")}
      </NavLink>
    </>
  );
}

export default UserNavigation;
