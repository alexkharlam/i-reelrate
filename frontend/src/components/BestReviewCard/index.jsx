import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useTranslation } from "react-i18next";

function BestReviewCard() {
  const { t } = useTranslation();
  const { makeRequest, data, isLoading: isLoadingReview } = useApi();
  const review = data?.review || null;

  useEffect(() => {
    makeRequest({ url: "/api/reviews/top-review" });
  }, [makeRequest]);

  if (isLoadingReview)
    return (
      <div className="lg:h-8.5 h-7 md:h-7.5 w-full border-2 border-gray-500 rounded-sm flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  if (review)
    return (
      <Link to={`/reviews/${review._id}`}>
        <div className="bg-black rounded-sm overflow-hidden relative group">
          <img
            className="lg:h-8.5 h-7 md:h-7.5 w-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-300"
            src={review.coverImageUrl}
          />
          <div className="absolute bottom-[0px] left-[0px] p-3 transition-all duration-200 group-hover:-translate-y-2 ">
            <p className="text-primary-300 font-bold text-1xl">
              {t("bestReviewCard.title")}
            </p>
            <h2 className="lg:text-5xl text-2xl">{review.title}</h2>
          </div>
        </div>
      </Link>
    );
}

export default BestReviewCard;
