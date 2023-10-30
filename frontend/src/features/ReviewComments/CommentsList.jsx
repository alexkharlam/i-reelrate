import CommentItem from "./CommentItem";

function CommentsList({ comments }) {
  return (
    <ul className="max-w-2xl flex flex-col gap-2 my-3">
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentsList;
