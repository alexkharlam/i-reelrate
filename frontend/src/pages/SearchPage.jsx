import LoadingSpinner from "../components/ui/LoadingSpinner";
import ReviewList from "../components/ui/reviewList/ReviewList";
import SearchInput from "../components/ui/search/SearchInput";
import useSearch from "../hooks/useSearch";

function SearchPage() {
  const { results, query, setQuery, isLoading } = useSearch();

  return (
    <>
      <h3 className="text-2xl font-semibold">Search for ReelRate reviews</h3>
      <SearchInput value={query} onChange={setQuery} />
      {isLoading && <LoadingSpinner />}
      {results.length > 0 && <ReviewList reviews={results} />}
    </>
  );
}

export default SearchPage;
