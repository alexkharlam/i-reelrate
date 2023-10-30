import AddComment from "./AddComment";
import CommentsContainer from "./CommentsContainer";
import { CommentsProvider } from "./CommentsContext";

function ReviewComments({ reviewId }) {
  return (
    <CommentsProvider reviewId={reviewId}>
      <AddComment />
      <CommentsContainer />
    </CommentsProvider>
  );
}

export default ReviewComments;
