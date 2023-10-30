import { createContext, useCallback, useState } from "react";
import useHttp from "../../../hooks/useHttp";

export const LikeContext = createContext();

export function LikeContextProvider({ children, reviewId }) {
  const [liked, setLiked] = useState(false);
  const { makeRequest, isLoading } = useHttp();

  const getLike = useCallback(
    function getLike() {
      const submitData = (data) => setLiked(data?.like ? true : false);

      makeRequest({ url: `/api/likes/${reviewId}`, callback: submitData });
    },
    [makeRequest, reviewId],
  );

  async function handleLike() {
    setLiked((prev) => !prev);

    await makeRequest({
      url: `/api/likes/${reviewId}`,
      options: {
        method: liked ? "delete" : "post",
      },
    });
  }

  return (
    <LikeContext.Provider value={{ liked, isLoading, handleLike, getLike }}>
      {children}
    </LikeContext.Provider>
  );
}
