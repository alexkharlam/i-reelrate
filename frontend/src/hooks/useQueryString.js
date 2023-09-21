import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const useQueryString = function () {
  const location = useLocation();
  const parsedQueryString = queryString.parse(location.search);

  return parsedQueryString;
};
