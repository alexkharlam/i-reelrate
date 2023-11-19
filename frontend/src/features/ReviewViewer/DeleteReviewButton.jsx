import { useSelector } from "react-redux";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button";
import { Trash as TrashIcon } from "react-feather";

function DeleteReviewButton({ review }) {
  const { makeRequest, isLoading } = useApi();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isOwnReview = user?._id === review.user._id;
  const { t } = useTranslation();

  if (!isAuthenticated || !isOwnReview) return;

  async function handleDelete() {
    await makeRequest({
      url: `/api/reviews/${review._id}`,
      options: { method: "DELETE" },
      callback: () => navigate("/"),
    });
  }

  return (
    <div className="">
      {isLoading && <LoadingSpinner />}
      <Button
        StartIcon={TrashIcon}
        onClick={handleDelete}
        className="bg-red hover:bg-red hover:bg-opacity-80 border-none"
      >
        {t("review.deleteReviewButton")}
      </Button>
    </div>
  );
}

export default DeleteReviewButton;
