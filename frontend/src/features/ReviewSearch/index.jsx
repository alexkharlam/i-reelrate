import Divider from "../../components/ui/Divider";
import SearchInput from "./SearchInput";
import SearchContainer from "./SearchContainer";
import useUrlQuery from "../../hooks/useUrlQuery";
import { useState } from "react";

function ReviewSearch() {
  const initialInputValue = useUrlQuery()?.query || "";
  const [inputValue, setInputValue] = useState(initialInputValue);

  return (
    <>
      <Divider className="mb-3" />
      <SearchInput inputValue={inputValue} onSetInputValue={setInputValue} />
      <SearchContainer inputValue={inputValue} />
    </>
  );
}

export default ReviewSearch;
