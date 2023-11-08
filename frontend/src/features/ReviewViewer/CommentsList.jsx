import CommentItem from "./CommentItem";

function CommentsList({ comments, isLoading }) {
  if (comments.length > 0)
    return (
      <ul
        className={`max-w-2xl flex flex-col gap-2 my-3 ${
          isLoading && "animate-pulse"
        }`}
      >
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </ul>
    );
}

export default CommentsList;
