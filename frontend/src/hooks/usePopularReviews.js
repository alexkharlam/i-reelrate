import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function usePopularReviews() {
  const [isLoading, setIsLoading] = useState(false);

  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(async function getReviews() {
    setIsLoading(true);
    try {
      const res = await axios({
        url: `/api/reviews?sort=-rating.numRates&limit=3`,
      });

      setReviews(res.data.reviews);
      setIsLoading(false);
    } catch (err) {
      toast.error("Cannot get popular reviews, please try again!", {
        toastId: "noData",
      });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getReviews();
  }, []);

  return {
    isLoading,
    reviews,
    setReviews,
  };
}
