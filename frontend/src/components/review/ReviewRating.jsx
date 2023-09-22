import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import RatingIcon from "../ui/icons/RatingIcon";
import useRating from "../../hooks/useRating";

function ReviewRating({ reviewData }) {
  const { t } = useTranslation();
  const { initUserRating, userRate, handleRate, rating } =
    useRating(reviewData);

  useEffect(() => {
    initUserRating();
  }, []);

  return (
    <div className="flex gap-1 flex-col">
      <div className="flex gap-1">
        <p>{t("review.rating")}:</p>
        <RatingIcon rating={rating} />
      </div>
      <div className="flex gap-2 items-center">
        <p>
          {t("review.yourRating")}&nbsp;
          {userRate}
        </p>
        <StarRatings
          className="h-2"
          rating={userRate}
          starRatedColor="#ffd43b"
          starHoverColor="#806a1e"
          starDimension="25px"
          starSpacing="5px"
          changeRating={handleRate}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </div>
  );
}

export default ReviewRating;
