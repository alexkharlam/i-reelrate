import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";

export default function useUserScore(reviewId) {
  const [userScore, setUserScore] = useState(null);
  const { isLoading, makeRequest, error } = useApi();

  async function getUserScore() {
    const res = await makeRequest({
      url: `/api/rates/getUserRate/${reviewId}`,
    });
    setUserScore(res.data?.rate?.rating || null);
  }

  useEffect(() => {
    getUserScore();
  }, []);

  async function updateUserScore(value) {
    if (value === userScore) return;
    setUserScore(value);
    await makeRequest({
      url: `/api/rates/${reviewId}`,
      options: {
        method: "post",
        data: { rating: value },
      },
    });
  }

  async function deleteUserScore() {
    setUserScore(null);
    await makeRequest({
      url: `/api/rates/${reviewId}`,
      options: {
        method: "delete",
      },
    });
  }

  return {
    userScore,
    isLoading,
    error,
    getUserScore,
    updateUserScore,
    deleteUserScore,
  };
}
