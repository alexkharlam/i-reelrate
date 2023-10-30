import { useContext } from "react";
import ScoreBadge from "./ScoreBadge";
import { UserScoreContext } from "../../context/UserScoreContext";
import { useTranslation } from "react-i18next";

function ChangeScoreButton({ openModal }) {
  const { t } = useTranslation();
  const { userScore } = useContext(UserScoreContext);

  return (
    <button
      onClick={openModal}
      className="dark:bg-gray-600 dark:bg-opacity-50 dark:hover:bg-opacity-60  text-white rounded-lg py-1 px-3 hover:scale-[102%] transition-all duration-200 font-semibold text-sm flex gap-3.5 justify-between items-center"
    >
      <span>{t("rate.changeRate")}</span>
      <ScoreBadge value={userScore} />
    </button>
  );
}

export default ChangeScoreButton;
