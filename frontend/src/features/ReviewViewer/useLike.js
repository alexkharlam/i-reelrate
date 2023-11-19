import { useCallback, useState } from "react";
import useApi from "../../hooks/useApi";

export default function useLike(reviewId) {
  const [liked, setLiked] = useState(false);
  const { makeRequest, isLoading, data } = useApi();
  const totalLikes = data?.totalLikes || 0;

  const getLike = useCallback(() => {
    const submitData = (res) => setLiked(res.data?.like ? true : false);

    makeRequest({ url: `/api/likes/${reviewId}`, callback: submitData });
  }, [makeRequest, reviewId]);

  async function handleLike() {
    setLiked((prev) => !prev);

    await makeRequest({
      url: `/api/likes/${reviewId}`,
      options: {
        method: liked ? "delete" : "post",
      },
    });
  }

  return {
    liked,
    getLike,
    handleLike,
    isLoading,
    totalLikes,
  };
}
