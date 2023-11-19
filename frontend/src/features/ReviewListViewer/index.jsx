import CategoryList from "./CategoryList";
import SortSelect from "./SortSelect";
import CATEGORIES from "../../../config/categories";
import useQuery from "./useQuery";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import getUrlQueryString from "../../utils/getUrlQueryString";
import PaginationBlock from "../../components/PaginationBlock";
import ReviewsList from "../../components/ReviewsList";

function ReviewListViewer({
  initialQuery,
  enableSorting,
  enableCategoryFilter,
  enablePagination,
}) {
  const { query, updateQuery } = useQuery(initialQuery);
  const { data, makeRequest, isLoading: isLoadingReviews, error } = useApi();
  const reviews = data?.reviews || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    const queryString = getUrlQueryString(query);
    makeRequest({ url: `/api/reviews?${queryString}` });
  }, [query, makeRequest]);

  function handlePage(numValue = 0) {
    if (numValue < 0) updateQuery({ page: +query.page - 1 });
    else updateQuery({ page: +query.page + 1 });
  }

  return (
    <>
      {enableCategoryFilter && (
        <CategoryList
          categories={CATEGORIES}
          query={query}
          updateQuery={updateQuery}
        />
      )}
      {enableSorting && <SortSelect query={query} updateQuery={updateQuery} />}
      <ReviewsList
        reviews={reviews}
        isLoading={isLoadingReviews}
        error={error}
      />
      {enablePagination && (
        <PaginationBlock
          totalPages={totalPages}
          page={query.page}
          onHandlePage={handlePage}
        />
      )}
    </>
  );
}

export default ReviewListViewer;
