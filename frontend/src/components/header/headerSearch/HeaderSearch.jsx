import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeaderSearchForm from "./HeaderSearchForm";

function HeaderSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  function handleSubmit(query) {
    navigate(`/search?query=${query}`);
  }

  return (
    <div className="lg:max-w-xl max-w-full md:max-w-sm w-full">
      {!isSearchPage && <HeaderSearchForm onSubmit={handleSubmit} />}
    </div>
  );
}

export default HeaderSearch;
