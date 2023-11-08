import { Star } from "react-feather";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { formatRatingValue, getRatingColor } from "./helpers";

const placeholderRating = {
  value: 0,
  numRates: 0,
};

function Rating({ reviewId }) {
  const { t } = useTranslation();
  const { makeRequest, data, isLoading } = useApi();
  const rating = data?.rating || placeholderRating;

  useEffect(() => {
    function fetchRating() {
      makeRequest({ url: `/api/rates/${reviewId}` });
    }

    fetchRating();

    const identifier = setInterval(() => fetchRating(), 4000);
    return () => clearTimeout(identifier);
  }, [makeRequest, reviewId]);

  const { numRates, value: ratingValue } = rating;
  const color = getRatingColor(ratingValue);
  const formattedValue = formatRatingValue(ratingValue);

  return (
    <div className={`${isLoading && "animate-pulse"}`}>
      <div className="flex gap-1 items-center text-md bg-opacity-95">
        <p className="font-bold text-1xl">{formattedValue}</p>
        <Star fill={color} color={color} size={24} />
      </div>
      <p className="text-tertiary">
        {numRates} {t("rate.rates")}
      </p>
    </div>
  );
}

export default Rating;
