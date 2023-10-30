import { createContext, useState } from "react";
import useHttp from "../../../hooks/useHttp";

export const UserScoreContext = createContext();

export const UserScoreProvider = ({ reviewId, children }) => {
  const [userScore, setUserScore] = useState(null);
  const { isLoading, makeRequest, error } = useHttp();

  async function getUserScore() {
    const submitData = (data) => setUserScore(data?.rate?.rating || null);

    await makeRequest({
      url: `/api/rates/getUserRate/${reviewId}`,
      callback: submitData,
    });
  }

  async function updateUserScore(value) {
    if (value === userScore) return;

    const submitData = () => setUserScore(value);

    await makeRequest({
      url: `/api/rates/${reviewId}`,
      callback: submitData,
      options: {
        method: "post",
        data: { rating: value },
      },
    });
  }

  async function deleteUserScore() {
    const submitData = () => setUserScore(null);

    makeRequest({
      url: `/api/rates/${reviewId}`,
      callback: submitData,
      options: {
        method: "delete",
      },
    });
  }

  return (
    <UserScoreContext.Provider
      value={{
        userScore,
        isLoading,
        error,
        getUserScore,
        updateUserScore,
        deleteUserScore,
      }}
    >
      {children}
    </UserScoreContext.Provider>
  );
};
