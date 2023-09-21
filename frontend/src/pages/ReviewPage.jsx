import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ReviewItem from "../components/review/ReviewItem";

function ReviewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(null);
  const { id } = useParams();

  async function getReview() {
    setIsLoading(true);

    try {
      const res = await axios({
        method: "get",
        url: `/api/reviews/${id}`,
      });

      console.log(res.data.review);
      setReview(res.data.review);
      setIsLoading(false);
    } catch (err) {
      console.log("Something went wrong while loading review!");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {review && <ReviewItem reviewData={review} />}
    </>
  );
}

export default ReviewPage;
