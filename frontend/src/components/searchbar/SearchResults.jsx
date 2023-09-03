import SearchResultItem from "./SearchResultItem";

function SearchResults({ results }) {
  if (!results.length > 0) return <p>placeholder</p>;

  return (
    <ul className="w-full flex translate-y-full flex-col gap-1 text-1xl p-2 bg-background absolute top-[0px] left-[0px]">
      {results.map((result) => (
        <SearchResultItem result={result} key={result.id} />
      ))}
    </ul>
  );
}

export default SearchResults;
