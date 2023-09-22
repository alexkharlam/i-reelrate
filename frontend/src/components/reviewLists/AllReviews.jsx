import useReviews from "../../hooks/useReviews";
import CategoriesCloud from "../categoriesCloud/CategoriesCloud";
import ReviewList from "./ReviewList";
import SortDropdown from "../sortDropdown/SortDropdown";
import LoadingSpinner from "../ui/spinners/LoadingSpinner";
import NoData from "../ui/messages/NoData";
import { useTranslation } from "react-i18next";

function AllReviews({ title, user = false }) {
  const { isLoading, reviews, sortBy, setSortBy, category, setCategory } =
    useReviews({ user });

  const { t } = useTranslation();

  return (
    <>
      {title && <h3 className="font-semibold text-2xl mt-3">{title}</h3>}
      <CategoriesCloud currentCategory={category} setCategory={setCategory} />
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

      {isLoading && <LoadingSpinner />}
      {!isLoading && reviews.length > 0 && <ReviewList reviews={reviews} />}
      {reviews.length === 0 && <NoData message={t("reviews.notFound")} />}
    </>
  );
}

export default AllReviews;
