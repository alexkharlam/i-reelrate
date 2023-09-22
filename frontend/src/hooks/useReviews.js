import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function useReviews({ user = false, initialSort }) {
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(
    initialSort ? initialSort : "-createdAt",
  );
  const [category, setCategory] = useState("all");
  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(
    async function getReviews() {
      setIsLoading(true);
      try {
        const res = await axios({
          url: `/api/reviews${
            user ? "/user" : ""
          }?sort=${sortBy}&category=${category}`,
        });

        setReviews(res.data.reviews);
        setIsLoading(false);
      } catch (err) {
        toast.error("Cannot get reviews, please try again!", {
          toastId: "noData",
        });
      }
    },
    [sortBy, category, user],
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
