import { useTranslation } from "react-i18next";

function DeleteScoreButton({ onDelete }) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onDelete}
      className="text-sm block mx-auto mt-2 text-gray-300 hover:text-gray-200 hover:underline"
    >
      {t("rate.deleteRate")}
    </button>
  );
}

export default DeleteScoreButton;
