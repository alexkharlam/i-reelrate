import { useCallback, useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);

  const handlePage = useCallback((numValue) => {
    setPage((prev) => (numValue < 0 ? prev - 1 : prev + 1));
  }, []);

  return {
    page,
    handlePage,
  };
}
