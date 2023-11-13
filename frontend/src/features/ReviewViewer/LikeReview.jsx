import { Heart } from "react-feather";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useLike from "./useLike";

function LikeReview({ reviewId }) {
  const { liked, getLike, isLoading, handleLike } = useLike(reviewId);
  const { t } = useTranslation();

  useEffect(() => {
    getLike();
  }, [getLike]);

  const buttonColor = liked ? "#f03e3e" : "rgba(0,0,0,0)";

  return (
    <button
      className="flex gap-2 items-center group"
      disabled={isLoading}
      onClick={handleLike}
    >
      <Heart
        className={`group-hover:text-[#f03e3e] transition-color duration-200 group-hover:scale-110 ${
          liked && "text-[#f03e3e]"
        }`}
        size={30}
        fill={buttonColor}
      />
      <p className="text-secondary">
        {!liked ? t("favourites.addTo") : t("favourites.deleteFrom")}
      </p>
    </button>
  );
}

export default LikeReview;
