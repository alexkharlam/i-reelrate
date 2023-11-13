import TextButton from "../../components/ui/buttons/TextButton";

function UserPagination({ page, onSetPage, totalPages }) {
  if (totalPages === 1) return;

  return (
    <div className="flex my-3 items-center justify-center gap-2">
      {page < totalPages && (
        <TextButton onClick={() => onSetPage((prev) => prev + 1)}>
          Next page
        </TextButton>
      )}

      {page > 1 && (
        <TextButton onClick={() => onSetPage((prev) => prev - 1)}>
          Prev page
        </TextButton>
      )}
    </div>
  );
}

export default UserPagination;
