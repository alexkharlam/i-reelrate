import CategoryList from "./CategoryList";
import SortSelect from "./SortSelect";
import useReviewList from "./useReviewList";
import Reviews from "./Reviews";

const CATEGORIES = [
  "movies",
  "music",
  "tv",
  "games",
  "books",
  "science",
  "tech",
];

function ReviewListViewer({
  initialQuery,
  enableSorting,
  enableCategoryFilter,
}) {
  const { reviews, isLoading, error, query, updateQuery } =
    useReviewList(initialQuery);

  return (
    <>
      {enableCategoryFilter && (
        <CategoryList
          categories={CATEGORIES}
          query={query}
          updateQuery={updateQuery}
        />
      )}
      {enableSorting && <SortSelect query={query} updateQuery={updateQuery} />}
      <Reviews reviews={reviews} isLoading={isLoading} error={error} />
    </>
  );
}

export default ReviewListViewer;
