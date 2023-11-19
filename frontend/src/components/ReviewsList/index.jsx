import { useTranslation } from "react-i18next";
import CenteredText from "../ui/messages/CenteredText";
import LoadingSpinner from "../ui/LoadingSpinner";
import ReviewItem from "./ReviewItem";

function ReviewsList({ reviews = [], isLoading = false, error = null }) {
  const { t } = useTranslation();

  if (error)
    return (
      <CenteredText additionalText={error}>
        {t("reviewList.error")}
      </CenteredText>
    );

  if (isLoading) return <LoadingSpinner />;

  if (reviews.length > 0)
    return (
      <ul className="flex flex-col gap-2">
        {reviews.map((review) => {
          if (review) return <ReviewItem key={review._id} review={review} />;
        })}
      </ul>
    );

  return <CenteredText>{t("reviewList.noReviews")}</CenteredText>;
}

export default ReviewsList;
