import Divider from "../../components/ui/Divider";
import SearchInput from "./components/SearchInput";
import SearchContainer from "./containers/SearchContainer";
import { InputProvider } from "./context/inputContext";

function ReviewSearch() {
    return (
        <InputProvider>
            <h1>Search reviews</h1>
            <Divider className='mb-3' />
            <SearchInput />
            <SearchContainer />
        </InputProvider>
    );
}

export default ReviewSearch;
