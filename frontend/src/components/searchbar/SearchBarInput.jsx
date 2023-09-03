import { Search } from "react-feather";

function SearchBarInput({ onInput, value }) {
  return (
    <div className="relative mx-auto w-full text-base font-semibold text-gray-900">
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-1xl "
        strokeWidth={2}
      />
      <input
        placeholder="Search for reviews"
        className="w-full rounded-lg py-1 pl-3.5 pr-2"
        onChange={onInput}
        value={value}
      />
    </div>
  );
}

export default SearchBarInput;
