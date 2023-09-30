import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";

function ReviewComments({ reviewId }) {
  const [comments, setComments] = useState([]);
  const { isLoading, makeRequest } = useHttp();

  useEffect(() => {
    makeRequest(`/api/reviews/${reviewId}/comments`, (data) =>
      setComments(data?.comments),
    );
  }, [makeRequest, reviewId]);

  return (
    <>
      <h3>Comments</h3>
      {isLoading && <p>Loading...</p>}
      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>{comment.text}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ReviewComments;
