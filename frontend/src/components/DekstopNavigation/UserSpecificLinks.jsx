import { Heart, Plus } from "react-feather";
import { User } from "react-feather";

import TextIconLink from "../ui/links/TextIconLink";
import { useTranslation } from "react-i18next";

function UserSpecificLinks() {
  const { t } = useTranslation();

  return (
    <>
      <TextIconLink cta={true} to="/reviews/create" Icon={Plus}>
        {t("navigation.createReview")}
      </TextIconLink>
      <TextIconLink to="/profile/reviews" Icon={User}>
        {t("navigation.myReviews")}
      </TextIconLink>
      <TextIconLink to="/profile/favourites" Icon={Heart}>
        {t("navigation.favourites")}
      </TextIconLink>
    </>
  );
}

export default UserSpecificLinks;
