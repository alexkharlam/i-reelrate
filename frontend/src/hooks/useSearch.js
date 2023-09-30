import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useQueryString } from "../hooks/useQueryString";

export default function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const { query: initialQuery } = useQueryString();
  const [query, setQuery] = useState(() => initialQuery || "");

  const makeRequest = useCallback(
    async function makeRequest() {
      setIsLoading(true);
      try {
        const res = await axios({
          url: "/api/reviews/search",
          method: "post",
          data: { query },
        });
        setResults(res.data.results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    },
    [query],
  );

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!query) return setResults([]);
      makeRequest();
    }, 1000);
    return () => clearTimeout(identifier);
  }, [query, makeRequest]);

  return { results, query, setQuery, isLoading };
}
