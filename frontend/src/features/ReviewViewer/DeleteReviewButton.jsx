import { useSelector } from "react-redux";
import TextButton from "../../components/ui/buttons/TextButton";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/ui/spinners/LoadingSpinner";

function DeleteReviewButton({ review }) {
  const { makeRequest, isLoading } = useApi();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isOwnReview = user?._id === review.user._id;
  console.log(user);

  if (!isAuthenticated || !isOwnReview) return;

  async function handleDelete() {
    console.log("delete");
    await makeRequest({
      url: `/api/reviews/${review._id}`,
      options: { method: "DELETE" },
      callback: () => navigate("/"),
    });
  }

  return (
    <div className="mt-3 mb-2">
      {isLoading && <LoadingSpinner />}
      <TextButton
        onClick={handleDelete}
        className="bg-red hover:bg-red hover:bg-opacity-80 border-none"
      >
        Delete review
      </TextButton>
    </div>
  );
}

export default DeleteReviewButton;
