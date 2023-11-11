import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";

export default function useCreateReview() {
  const { makeRequest, isLoading, error } = useApi();
  const navigate = useNavigate();

  function submitReview(reviewFormData) {
    function handleSuccess(res) {
      toast.success("Your review successfully created!", {
        toastId: "created",
      });
      navigate(`/reviews/${res.data.review._id}`);
    }

    makeRequest({
      url: "/api/reviews",
      options: { method: "POST", data: reviewFormData },
      callback: handleSuccess,
    });
  }

  return { submitReview, error, isLoading };
}
