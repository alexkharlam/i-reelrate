import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function useRating(reviewData) {
  const [userRate, setUserRate] = useState(0);
  const [rating, setRating] = useState(reviewData.rating);

  async function initUserRating() {
    try {
      const res = await axios({
        url: `/api/rates/getUserRate/${reviewData._id}`,
      });

      if (res.data.rate) setUserRate(res.data.rate.rating);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong, try again!",
      );
    }
  }

  async function updateRating() {
    try {
      const res = await axios({
        method: "get",
        url: `/api/rates/getRating/${reviewData._id}`,
      });
      setRating(res.data.rating);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong, try again!",
      );
    }
  }

  async function updateUserRating(value) {
    try {
      await axios({
        method: "post",
        url: `/api/rates/${reviewData._id}`,
        data: { rating: value },
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong, try again!",
      );
    }
  }

  async function handleRate(newRating) {
    setUserRate(newRating);

    await updateUserRating(newRating);
    updateRating();
  }

  return { initUserRating, updateUserRating, handleRate, userRate, rating };
}
