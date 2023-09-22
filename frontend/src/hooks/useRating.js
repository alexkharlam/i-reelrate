import { useState } from "react";
import axios from "axios";

export default function useRating(reviewData) {
  const [rating, setRating] = useState(0);

  async function initUserRating() {
    try {
      const res = await axios({
        url: `/api/rates/${reviewData._id}/userRate`,
      });

      if (res.data.rate) setRating(res.data.rate.rating);
    } catch (err) {
      console.log(err);
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
      console.log(err);
    }
  }

  function handleRate(newRating) {
    setRating(newRating);

    updateUserRating(newRating);
  }

  return { initUserRating, updateUserRating, handleRate, rating };
}
