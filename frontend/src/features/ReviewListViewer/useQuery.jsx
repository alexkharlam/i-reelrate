import { useCallback, useState } from "react";

export default function useQuery(defaultQuery = {}) {
  const initialQuery = {
    sortBy: defaultQuery.sortBy || "-createdAt",
    category: defaultQuery.category || null,
    limit: defaultQuery.limit || null,
    user: defaultQuery.user || null,
    page: defaultQuery.page || 1,
  };

  const [query, setQuery] = useState(initialQuery);

  const updateQuery = useCallback((filter) => {
    setQuery((prev) => ({ ...prev, ...filter }));
  }, []);

  return {
    query,
    updateQuery,
  };
}
