import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ReviewsList from "../../components/ReviewsList";
import LoadingSpinner from "../../components/ui/spinners/LoadingSpinner";
import { useTranslation } from "react-i18next";

function FavouritesViewer() {
  const { t } = useTranslation();
  const { makeRequest, isLoading, error, data } = useApi();
  const reviews = data?.likes || [];

  useEffect(() => {
    makeRequest({ url: "/api/likes" });
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

export default FavouritesViewer;
