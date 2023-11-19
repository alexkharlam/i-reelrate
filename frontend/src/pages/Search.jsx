import { useSelector } from "react-redux";
import MainLinksBlock from "../components/MainLinksBlock";
import ReviewSearch from "../features/ReviewSearch";
import { useTranslation } from "react-i18next";
import { LoginBlock } from "../features/Auth";
import Divider from "../components/ui/Divider";

function Search() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("search.title")}</h1>
      <ReviewSearch />
      <Divider className="my-4" />
      {isAuthenticated && <MainLinksBlock className="my-3.5" />}
      {!isAuthenticated && <LoginBlock className="my-3.5" />}
    </>
  );
}

export default Search;
