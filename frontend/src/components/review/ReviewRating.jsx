import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import RatingIcon from "../ui/RatingIcon";
import axios from "axios";

function ReviewRating({ reviewData }) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function initUserRating() {
      try {
        const res = await axios({
          url: `/api/rates/${reviewData._id}/userRate`,
        });

        if (res.data.rate) setRating(res.data.rate.rating);
      } catch (err) {
        console.log(err);
      }
    }

    initUserRating();
  }, []);

  async function updateUserRating(value) {
    try {
      await axios({
        method: "post",
        url: `/api/rates/${reviewData._id}`,
        data: { rating: value },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleRate(newRating) {
    setRating(newRating);

    updateUserRating(newRating);
  }

  return (
    <div className="flex gap-1 flex-col">
      <div className="flex gap-1">
        <p>{t("review.rating")}:</p>
        <RatingIcon rating={reviewData.rating} />
      </div>
      <div className="flex gap-2 items-center">
        <p>
          {t("review.yourRating")}&nbsp;
          {rating}
        </p>
        <StarRatings
          className="h-2"
          rating={rating}
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
