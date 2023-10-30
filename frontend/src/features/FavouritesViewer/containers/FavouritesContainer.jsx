import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import ReviewsList from "../../../components/ReviewsList";
import LoadingSpinner from "../../../components/ui/spinners/LoadingSpinner";
import { useTranslation } from "react-i18next";

function FavouritesContainer() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const { makeRequest, isLoading, error } = useHttp();

  useEffect(() => {
    function submitData(data) {
      setReviews(data.likes);
    }

    makeRequest({ url: "/api/likes", callback: submitData });
  }, [makeRequest]);

  return (
    <>
      <h3>{t("favourites.favourites")}</h3>
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
    </>
  );
}

export default FavouritesContainer;
