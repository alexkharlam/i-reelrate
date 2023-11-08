import { useCallback, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";

export default function useComments(reviewId) {
  const { makeRequest, isLoading, error } = useApi();
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    const res = await makeRequest({ url: `/api/comments/${reviewId}` });
    setComments(res?.data?.comments || []);
  }, [makeRequest, reviewId]);

  useEffect(() => {
    fetchComments();

    const identifier = setInterval(() => fetchComments(), 8000);
    return () => clearTimeout(identifier);
  }, [makeRequest, reviewId, fetchComments]);

  async function createComment(commentText) {
    await makeRequest({
      url: `/api/comments/${reviewId}`,
      options: { method: "post", data: { text: commentText } },
    });
    fetchComments();
  }

  return {
    comments,
    createComment,
    fetchComments,
    isLoading,
    error,
  };
}
