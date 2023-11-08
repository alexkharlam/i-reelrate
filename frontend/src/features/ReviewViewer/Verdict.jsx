import { useTranslation } from "react-i18next";

function Verdict({ review }) {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border-2 border-gray-500 p-3 flex gap-2 items-center justify-between max-w-3xl">
      <p className=" font-bold text-1xl">
        {review.product} {t("review.verdict")}:
      </p>
      <p className="text-9xl p-3.5 rounded-ss-lg rounded-br-xl font-bold bg-primary">
        {review.verdict}
      </p>
    </div>
  );
}

export default Verdict;
