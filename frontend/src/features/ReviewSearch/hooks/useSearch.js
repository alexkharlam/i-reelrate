import { useCallback } from "react";
import useHttp from "../../../hooks/useHttp";

export default function useSearch() {
  const { makeRequest, isLoading, error } = useHttp();

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
