import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchForm from "../ui/search/SearchForm";

function HeaderSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  function handleSubmit(query) {
    navigate(`/search?query=${query}`);
  }

  return (
    <div className="max-w-xl w-full">
      {!isSearchPage && <SearchForm onSubmit={handleSubmit} />}
    </div>
  );
}

export default HeaderSearch;
