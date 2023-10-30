import { useContext } from "react";
import { CommentsContext } from "./CommentsContext";
import CommentsList from "./CommentsList";

function CommentsContainer() {
  const { comments, isLoading } = useContext(CommentsContext);

  return (
    <div className={`${isLoading && "animate-pulse"}`}>
      {comments.length > 0 && <CommentsList comments={comments} />}
    </div>
  );
}

export default CommentsContainer;
