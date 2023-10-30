import ReviewRating from "../../../ReviewRating";
import Divider from "../../../../components/ui/Divider";
import LikeReview from "../../../LikeReview";

import Product from "./Product";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Text from "./Text";
import Verdict from "./Verdict";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import ReviewComments from "../../../ReviewComments";
import { useSelector } from "react-redux";

function Review({ id }) {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Product />
      <Title />
      {isAuthenticated && <LikeReview reviewId={id} />}
      <CoverImage />
      <div className="flex gap-3.5 sm:gap-0.5 sm:flex-row justify-between items-start flex-col">
        <div className="flex flex-col gap-3.5">
          <ReviewRating id={id} />
        </div>
        <Author />
      </div>
      <Divider className="my-3" />
      <Text />
      <Divider className="my-3" />
      <Verdict />
      {isAuthenticated && (
        <>
          <h3 className="mt-3.5">{t("comments.comments")}</h3>
          <ReviewComments reviewId={id} />
        </>
      )}
    </>
  );
}

export default Review;
