import { useEffect } from "react";
import LoadingSpinner from "../../components/ui/spinners/LoadingSpinner";
import { useTranslation } from "react-i18next";
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

export default function ReviewViewer({ reviewId }) {
  const { t } = useTranslation();
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
          {isAuthenticated && <LikeReview reviewId={review._id} />}
          <CoverImage review={review} />
          <div className="flex gap-3.5 sm:gap-0.5 sm:flex-row justify-between items-start flex-col">
            <div className="flex flex-col gap-3.5">
              <Rating reviewId={reviewId} />
              <UserRate reviewId={reviewId} />
            </div>
            <Author review={review} />
          </div>
          <Divider className="my-3" />
          <Text review={review} />
          <Divider className="my-3" />
          <Verdict review={review} />
          {isAuthenticated && (
            <>
              <h3 className="mt-3.5">{t("comments.comments")}</h3>
              <ReviewComments reviewId={review._id} />
            </>
          )}
        </>
      )}

      {isLoading && <LoadingSpinner />}

      {error && <p>Error loading review!</p>}
    </>
  );
}
