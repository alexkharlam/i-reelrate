import { useEffect } from "react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useSelector } from "react-redux";
import Divider from "../../components/ui/Divider";
import LikeReview from "./LikeReview";
import Product from "./Product";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Text from "./Text";
import Verdict from "./Verdict";
import Title from "./Title";
import ReviewComments from "./ReviewComments";
import Rating from "./Rating";
import UserRate from "../UserRate";
import useApi from "../../hooks/useApi";
import DeleteReviewButton from "./DeleteReviewButton";

export default function ReviewViewer({ reviewId }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { makeRequest, data, isLoading, error } = useApi();
  const review = data?.review || null;

  useEffect(() => {
    makeRequest({ url: `/api/reviews/${reviewId}` });
  }, [makeRequest, reviewId]);

  return (
    <>
      {review && (
        <>
          <Product review={review} />
          <Title review={review} />
          <div className="flex gap-2.5 sm:justify-between sm:flex-row flex-col sm:items-center mt-3 mb-2.5">
            {isAuthenticated && <LikeReview reviewId={review._id} />}
            <DeleteReviewButton review={review} />
          </div>
          <CoverImage review={review} />
          <div className="flex gap-3.5 sm:gap-0.5 sm:flex-row justify-between items-start flex-col">
            <div className="flex flex-col gap-2">
              <Rating reviewId={reviewId} />
              <UserRate reviewId={reviewId} />
            </div>
            <Author review={review} />
          </div>
          <Divider className="my-3" />
          <Text review={review} />
          <Divider className="my-3" />
          <Verdict review={review} />
          {isAuthenticated && <ReviewComments reviewId={review._id} />}
        </>
      )}

      {isLoading && <LoadingSpinner />}

      {error && <p>Error loading review!</p>}
    </>
  );
}
