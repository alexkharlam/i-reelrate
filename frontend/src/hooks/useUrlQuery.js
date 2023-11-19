import queryString from "query-string";
import { useLocation } from "react-router-dom";

export default function useUrlQuery() {
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);

  return parsedQuery;
}
