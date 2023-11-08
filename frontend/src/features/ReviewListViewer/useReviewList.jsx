import { useCallback, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import getUrlQueryString from "../../utils/getUrlQueryString";

export default function useReviewList(customQuery = {}) {
  const { makeRequest, isLoading, error, data } = useApi();
  const reviews = data?.reviews || [];

  const initialQuery = {
    sortBy: customQuery.sortBy || "-createdAt",
    category: customQuery.category || null,
    limit: customQuery.limit || null,
    user: customQuery.user || null,
  };

  const [query, setQuery] = useState(initialQuery);

  const updateQuery = useCallback((filter) => {
    setQuery((prev) => ({ ...prev, ...filter }));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const queryString = getUrlQueryString(query);
      const url = `/api/reviews?${queryString}`;
      await makeRequest({ url });
    }

    fetchData();
  }, [makeRequest, query]);

  return { reviews, isLoading, error, query, updateQuery };
}
