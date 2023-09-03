import { useEffect, useState } from "react";
import { useSearchInput } from "../../hooks/useSearchInput";
import SearchBarInput from "./SearchBarInput";
import SearchResults from "./SearchResults";

const data = [
  {
    title: "What is wrong with new Star Wars trilogy",
    userRating: 3.5,
    id: "001",
  },
  {
    title: "Why what how",
    userRating: 5,
    id: "002",
  },
  {
    title: "New Tarantino movie review",
    userRating: 2,
    id: "003",
  },
];

function SearchBar() {
  const [results, setResults] = useState([]);
  const { inputValue, inputHandler } = useSearchInput();

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!inputValue.length > 0) {
        setResults([]);
        return;
      }

      setResults(data.filter((val) => val.title.includes(inputValue)));
    }, 1000);
    return () => clearTimeout(identifier);
  }, [inputValue]);

  return (
    <div className="relative w-full lg:w-1/2">
      <SearchBarInput value={inputValue} onInput={inputHandler} />
      <SearchResults results={results} />
    </div>
  );
}

export default SearchBar;
