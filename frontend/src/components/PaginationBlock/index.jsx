import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

function PaginationBlock({
  totalPages = 1,
  page,
  onHandlePage,
  isLoading = false,
}) {
  if (totalPages === 1) return;
  if (isLoading) return <LoadingSpinner className="my-2 mx-auto" />;

  return (
    <div className="flex my-3 items-center justify-center gap-2">
      {page > 1 && (
        <Button onClick={() => onHandlePage(-1)}>&larr; Previous page</Button>
      )}
      {page < totalPages && (
        <Button onClick={() => onHandlePage(1)}>Next page &rarr;</Button>
      )}
    </div>
  );
}

export default PaginationBlock;
