import { useContext } from "react";
import { LikeContext } from "../../context/LikeContext";
import { Heart } from "react-feather";
import { useTranslation } from "react-i18next";

function LikeButton() {
  const { t } = useTranslation();
  const { isLoading, handleLike, liked } = useContext(LikeContext);

  function handleClick() {
    handleLike();
  }

  const buttonColor = liked ? "#f03e3e" : "rgba(0,0,0,0)";

  return (
    <button
      className="flex gap-2 items-center group my-2.5"
      disabled={isLoading}
      onClick={handleClick}
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

export default LikeButton;
