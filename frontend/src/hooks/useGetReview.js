import axios from "axios";

export default function useGetReview() {
  async function getReview(reviewId, submitData) {
    try {
      const res = await axios(`/api/reviews/${reviewId}`);

      submitData(res.data.review);
    } catch (err) {
      console.log(err);
    }
  }

  return { getReview };
}
