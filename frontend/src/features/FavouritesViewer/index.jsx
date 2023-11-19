import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ReviewsList from "../../components/ReviewsList";
import { useTranslation } from "react-i18next";
import PaginationBlock from "../../components/PaginationBlock";
import usePagination from "../../hooks/usePagination";

function FavouritesViewer() {
  const { t } = useTranslation();
  const { makeRequest, isLoading: isLoadingFavourites, error, data } = useApi();
  const { page, handlePage } = usePagination();
  const reviews = data?.likes || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    makeRequest({ url: `/api/likes?page=${page}` });
  }, [makeRequest, page]);

  return (
    <>
      <h3>{t("favourites.favourites")}</h3>
      <ReviewsList
        reviews={reviews}
        isLoading={isLoadingFavourites}
        error={error}
      />
      <PaginationBlock
        page={page}
        onHandlePage={handlePage}
        totalPages={totalPages}
      />
    </>
  );
}

export default FavouritesViewer;
