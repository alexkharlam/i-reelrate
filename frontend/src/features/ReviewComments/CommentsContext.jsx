import { createContext, useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";

export const CommentsContext = createContext({
  comments: {},
  createComment: () => {},
});

export const CommentsProvider = function ({ children, reviewId }) {
  const { makeRequest, isLoading } = useHttp();
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    const data = await makeRequest({ url: `/api/comments/${reviewId}` });
    setComments(data.comments);
  }, [makeRequest, reviewId]);

  useEffect(() => {
    getComments();

    const identifier = setInterval(() => getComments(), 8000);
    return () => clearTimeout(identifier);
  }, [makeRequest, reviewId, getComments]);

  async function createComment(commentText) {
    await makeRequest({
      url: `/api/comments/${reviewId}`,
      options: { method: "post", data: { text: commentText } },
    });
    getComments();
  }

  return (
    <CommentsContext.Provider value={{ comments, createComment, isLoading }}>
      {children}
    </CommentsContext.Provider>
  );
};
