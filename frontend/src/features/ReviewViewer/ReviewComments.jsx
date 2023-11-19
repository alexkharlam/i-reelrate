import { useEffect } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { useSelector } from "react-redux";
import useComments from "./useComments";
import { useTranslation } from "react-i18next";

function ReviewComments({ reviewId }) {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { comments, fetchComments, createComment, isLoading, error } =
    useComments(reviewId);

  useEffect(() => {
    fetchComments();
    const identifier = setInterval(() => fetchComments(), 8000);
    return () => clearTimeout(identifier);
  }, [fetchComments]);

  return (
    <>
      <h3 className="mt-3.5">{t("comments.comments")}</h3>
      {isAuthenticated && <AddComment onAddComment={createComment} />}
      <CommentsList comments={comments} isLoading={isLoading} />
      {error && <p>Failed loading comments</p>}
    </>
  );
}

export default ReviewComments;
