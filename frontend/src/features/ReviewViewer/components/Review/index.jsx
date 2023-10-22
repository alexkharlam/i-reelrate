import ReviewRating from "../../../ReviewRating";
import Divider from "../../../../components/ui/Divider";

import Product from "./Product";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Text from "./Text";
import Verdict from "./Verdict";
import Title from "./Title";
import { useTranslation } from "react-i18next";

function Review({ id }) {
  const { t } = useTranslation();

  return (
    <>
      <Product />
      <Title />
      <CoverImage />
      <div className="flex gap-3.5 sm:gap-0.5 sm:flex-row justify-between items-start flex-col">
        <ReviewRating id={id} />
        <Author />
      </div>
      <Divider className="my-3" />
      <Text />
      <Divider className="my-3" />
      <Verdict />
      <h4 className="mb-2.5 mt-4">{t("review.didYouLike")}</h4>
      <ReviewRating id={id} />
    </>
  );
}

export default Review;
