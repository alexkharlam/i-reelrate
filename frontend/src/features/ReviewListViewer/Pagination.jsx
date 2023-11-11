import TextButton from "../../components/ui/buttons/TextButton";

function Pagination({ query, updateQuery, totalPages }) {
  const currentPage = query.page;

  function handleNextPage() {
    updateQuery({ page: +currentPage + 1 });
  }

  function handlePrevPage() {
    updateQuery({ page: +currentPage - 1 });
  }

  return (
    <div className="flex items-center justify-center gap-2.5 my-2">
      {currentPage > 1 && (
        <TextButton onClick={handlePrevPage}>&larr; Prev page</TextButton>
      )}

      {currentPage < totalPages && (
        <TextButton onClick={handleNextPage}>Next page &rarr;</TextButton>
      )}
    </div>
  );
}

export default Pagination;
