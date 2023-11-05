import Divider from "../../components/ui/Divider";
import SearchInput from "./SearchInput";
import SearchContainer from "./SearchContainer";
import { InputProvider } from "./inputContext";

function ReviewSearch() {
  return (
    <InputProvider>
      <h1>Search reviews</h1>
      <Divider className="mb-3" />
      <SearchInput />
      <SearchContainer />
    </InputProvider>
  );
}

export default ReviewSearch;
