import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function useReview(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(null);

  const getReview = useCallback(
    async function getReviews() {
      setIsLoading(true);
      try {
        const res = await axios({
          method: "get",
          url: `/api/reviews/${id}`,
        });

        setReview(res.data.review);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error(
          err?.response?.data?.message || "Something went wrong, try again!",
        );
      }
    },
    [id],
  );

  useEffect(() => {
    getReview();
  }, [getReview]);

  return {
    isLoading,
    review,
  };
}
