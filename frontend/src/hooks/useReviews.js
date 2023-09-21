import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function useReviews({ user = false }) {
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("-createdAt");
  const [category, setCategory] = useState("all");
  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(
    async function getReviews() {
      setIsLoading(true);
      try {
        const res = await axios({
          url: `http://localhost:3000/api/reviews${
            user ? "/user" : ""
          }?sort=${sortBy}&category=${category}`,
        });

        setReviews(res.data.reviews);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    },
    [sortBy, category],
  );

  useEffect(() => {
    getReviews();
  }, [sortBy, category, getReviews]);

  return {
    isLoading,
    reviews,
    sortBy,
    setSortBy,
    category,
    setCategory,
    setReviews,
  };
}
