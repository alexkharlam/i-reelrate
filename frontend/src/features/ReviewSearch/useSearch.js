import { useCallback } from "react";
import useApi from "../../hooks/useApi";

export default function useSearch() {
  const { makeRequest, isLoading, error } = useApi();

  const searchReviews = useCallback(
    function (query, submitData) {
      makeRequest({
        url: "/api/reviews/search",
        callback: submitData,
        options: {
          method: "post",
          data: { query },
        },
      });
    },
    [makeRequest],
  );

  return { searchReviews, isLoading, error };
}
