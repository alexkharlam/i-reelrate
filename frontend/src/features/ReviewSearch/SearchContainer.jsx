import { useEffect } from "react";
import ReviewsList from "../../components/ReviewsList";
import useApi from "../../hooks/useApi";

function SearchContainer({ inputValue }) {
  const { isLoading: isLoadingResults, error, data, makeRequest } = useApi();
  const results = data?.results || [];

  useEffect(() => {
    if (!inputValue) return;

    function fetchResults() {
      makeRequest({
        url: "/api/reviews/search",
        options: {
          method: "post",
          data: { query: inputValue },
        },
      });
    }

    const identifier = setTimeout(() => {
      fetchResults();
    }, 1000);

    return () => clearTimeout(identifier);
  }, [inputValue, makeRequest]);

  if (inputValue)
    return (
      <ReviewsList
        reviews={results}
        isLoading={isLoadingResults}
        error={error}
      />
    );
}

export default SearchContainer;
