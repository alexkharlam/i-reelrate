import SearchInput from "./SearchInput";
import ReviewList from "../reviewLists/ReviewList";
import LoadingSpinner from "../ui/spinners/LoadingSpinner";
import useSearch from "../../hooks/useSearch";
import NoData from "../ui/messages/NoData";
import { useTranslation } from "react-i18next";

function Search() {
  const { t } = useTranslation();
  const { results, query, setQuery, isLoading } = useSearch();

  return (
    <>
      <h3 className="text-2xl font-semibold">{t("search.title")}</h3>
      <SearchInput value={query} onChange={setQuery} />
      {isLoading && <LoadingSpinner />}
      {results.length > 0 && <ReviewList reviews={results} />}
      {!isLoading && results.length === 0 && (
        <NoData message={t("search.placeholder")} />
      )}
    </>
  );
}

export default Search;
