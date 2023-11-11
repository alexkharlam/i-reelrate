import CategoryList from "./CategoryList";
import SortSelect from "./SortSelect";
import Reviews from "./Reviews";
import Pagination from "./Pagination";
import CATEGORIES from "../../../config/categories";
import useQuery from "./useQuery";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import getUrlQueryString from "../../utils/getUrlQueryString";

function ReviewListViewer({
  initialQuery,
  enableSorting,
  enableCategoryFilter,
  enablePagination,
}) {
  const { query, updateQuery } = useQuery(initialQuery);
  const { data, makeRequest, isLoading, error } = useApi();
  const reviews = data?.reviews || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    const queryString = getUrlQueryString(query);
    makeRequest({ url: `/api/reviews?${queryString}` });
  }, [query, makeRequest]);

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
      <Reviews reviews={reviews} isLoading={isLoading} error={error} />
      {enablePagination && (
        <Pagination
          updateQuery={updateQuery}
          reviews={reviews}
          query={query}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default ReviewListViewer;
